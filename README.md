# CREDIT

Community REsearch DIgitial Toolkit

## Project Structure

The project is a Vue 3 + TypeScript application built with Vite, featuring:

- **Component-based UI** with reusable PrimeVue Volt components
- **Pinia store** for state management (project plan data)
- **Vue Router** for navigation between toolkit phases
- **Keycloak integration** for authentication and data persistence

## Development Guide

### Keycloak Integration & Authentication

The application uses **Keycloak** for user authentication. Key files:

- **`src/composables/keycloak.ts`** – Keycloak composable that provides:
  - `authenticated` – Reactive ref tracking auth state
  - `getToken()` – Async function to retrieve the current JWT token
  - `login()` / `logout()` – Auth flow helpers

#### How It Works

1. Keycloak is initialized in `main.ts` before the Vue app mounts
2. Components use `useKeycloak()` to access auth state and token
3. Stores receive the Keycloak composable via `setAuth()` to handle token-gated requests
4. Token is passed to all backend API calls (GET/PUT to `/project_plan`)

**Important:** When users login, a page redirect occurs. To preserve unsaved form data across this redirect, the app saves data to localStorage before login triggers—see **Development Phase Component** below.

### Development Phase Component & Auto-Save

The **Development Phase** (`src/components/toolkit/ToolkitDevelopmentPhase.vue`) is the primary interface for editing project plans. It demonstrates best practices for handling complexity:

#### Architecture

This component uses **composable-based separation of concerns**:

- **`useProjectPlanAutoSave`** – Watches form field changes and triggers debounced saves (2s default)
  - Only saves after initial load to avoid triggering on data fetch
  - Manages the `dirty` flag to track unsaved changes
- **`useProjectPlanData`** – Handles data lifecycle
  - Restores localStorage backup (if available)
  - Initializes auth provider with the store
  - Loads user data from server on mount
- **`useUnsavedChangesGuard`** – Prevents accidental navigation
  - Adds a `beforeunload` listener to warn users with unsaved changes
- **`useClipboard`** – Utility for copying data in plain-text format
  - Formats field data with labels and line breaks
  - Tracks copy success state for UI feedback

#### Data Persistence Features

1. **Auto-Save with Retry Logic**

   - Automatically saves every 2 seconds (debounced) when data changes
   - Retries failed saves up to 3 times with exponential backoff (1s, 2s, 4s)
   - Shows visual feedback: "Unsaved changes" (yellow) → "All changes saved" (green)
   - Displays error messages in red with "Retrying..." indicator

2. **Login Redirect Handling**

   - Before login redirect, current form data is saved to localStorage
   - On page reload, data is restored and displayed in an info card
   - User can copy the previous data to clipboard (formatted as plain text)
   - Server-loaded data takes precedence (no overwrite)

3. **Navigation Protection**
   - Browser will prompt user if they try to leave with unsaved changes
   - Only triggers when `dirty` flag is true (data has been edited)

#### Store Integration

The **`projectPlan` store** (`src/stores/projectPlan.ts`) manages:

- All form field state (title, vision, approach, etc.)
- Dirty/loading/error states
- Token-aware `save()` and `load()` methods (auto-fetch token from auth provider)
- `saveToLocalStorage()` / `restoreFromLocalStorage()` for backup/recovery
- Retry logic for failed saves

**Key Detail:** `saveToLocalStorage()` only saves if at least one field has content—empty forms are not backed up.

### PrimeVue Volt Components

The app uses [PrimeVue Volt](https://volt.primevue.org/overview) (`src/volt/`), a custom component library built on PrimeVue. Theoretically, only the core primevue packages should need updated, and the components "belong" to our codebase. Some of the components used are:

- **`Button.vue`** – Primary action button (supports `outlined` variant)
- **`Card.vue`** – Container for content sections
- **`InputText.vue`** – Text input field
- **`Textarea.vue`** – Multi-line text input
- **`Select.vue`** – Dropdown selector
- **`Checkbox.vue`** – Checkbox input
- **`RadioButton.vue`** – Radio button input
- **`DataTable.vue`** – Table component (used in Glossary)
- **`Dialog.vue`** – Modal dialog
- **`Accordion.vue`** / **`AccordionPanel.vue`** – Collapsible sections
- **`Toast.vue`** – Toast notifications
- **`Skeleton.vue`** – Loading placeholder (can probably get rid of now as was only used during prototyping)

**Usage:** Import and use as standard Vue components. All support `v-model` binding for form inputs.

### Routing

Vue Router configuration is in `src/router/router.ts`. The app structure follows a **toolkit-based navigation** model:

- **Entry:** Landing page (`/`)
- **Toolkit Phases:** Sequential workflow steps (e.g., `/development`, `/launch`)
- **Reference Pages:** Resources, glossary, case studies, bibliography

#### Key Routes

- `/` – Home/landing page
- `/resources` – Resource downloads and templates
- `/glossary` – Term definitions
- `/case-studies` – Example projects
- `/bibliography` – Personalised Reading List References Added by User
- `plan` - User's overall plan outline. Likely produced in the Development Phase.
- `/profile` – User profile (requires auth)

#### Navigation Patterns

- **Phase Navigation:** `ToolkitPhaseNavigation` component shows current phase and allows jumping to other phases
- **Next Button:** `ToolkitNextButton` component links to the next phase
- **RouterLink:** Used throughout for internal navigation

The router supports both Vue Router's `<RouterLink>` and programmatic navigation via `router.push()`.

## State Management

**Pinia** is used for global state. Key stores:

- **`projectPlan`** – User's project plan data with save/load/retry logic
- **`bibliography`** – Reference library data

Stores use the **composition API** pattern with explicit `storeToRefs()` for reactivity in components.

## Development Workflow

I've ended up being quite lax about the type checking. Mainly because there are various problems with the code in the volt components! But ideally one should try and avoid problems flagged by type-check.

```bash
# Install dependencies
pnpm install

# Run dev server (HMR enabled)
pnpm run dev

# Type check
pnpm run type-check

# Lint & format
pnpm run lint
pnpm run format

# Build for production
pnpm run build
```

## Docker Deployment

The application can be containerized using the included Dockerfile:

```bash
# Build the Docker image
docker build -t credit-toolkit .

# Run the container on port 5173 (remember that you'll need to setup the CORS settings of the API and keycloak appropriately to reflect this)
docker run -p 5173:80 credit-toolkit
```

The Dockerfile uses a **multi-stage build**:

1. **Build stage:** Uses Node.js Alpine with pnpm to install dependencies and build the production bundle
2. **Production stage:** Serves the static build via nginx on port 80

**Environment Configuration:** The build uses `VITE_BASE_URL` from `.env.production` to set the base path (defaults to `/`).
`VITE_API_BASE_URL` and `VITE_KEYCLOAK_URL` can be used to configure API and keycloak locations.

## Key Dependencies

- **Vue 3** – UI framework
- **TypeScript** – Type safety
- **Vite** – Build tool with HMR
- **Pinia** – State management
- **Vue Router** – Client-side routing
- **Axios** – HTTP client
- **PrimeVue 4** – UI component library (Volt components built on top)
- **Keycloak JS** – Authentication
- **Tailwind CSS** – Styling
- **html2canvas-pro** / **jsPDF** – Export functionality

## Testing (or lack thereof)

Unit tests use **Vitest**. But I have not been adding them as I went along! Run tests with:

```bash
pnpm run test:unit
```
