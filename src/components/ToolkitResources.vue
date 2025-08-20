<script setup lang="ts">
import ToolkitHeading from './ui/ToolkitHeading.vue'

const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <div class="w-full flex flex-col container mx-auto px-8">
    <ToolkitHeading text="Resources"></ToolkitHeading>
    <h3 class="text-xl font-bold pb-4">Downloadable CREDIT documents</h3>
    <p>
      These are downloadable documents that encapsulate some of the considerations highlighted by
      CREDIT. Download them for offline usage/printing.
    </p>
    <ul class="list-disc pl-6">
      <li>
        Project Considerations Checklist -
        <a
          :href="baseUrl + 'public/resources/CREDIT_checklist.docx'"
          download="CREDIT_checklist.docx"
          target="_blank"
        >
          Word Doc
        </a>
        |
        <a
          :href="baseUrl + 'public/resources/CREDIT_checklist.pdf'"
          download="CREDIT_checklist.pdf"
          target="_blank"
        >
          PDF
        </a>
      </li>
      <li>
        Overall Plan -
        <a
          :href="baseUrl + 'public/resources/CREDIT_overallplan.docx'"
          download="CREDIT_overallplan.docx"
          target="_blank"
        >
          Word Doc
        </a>
        |
        <a
          :href="baseUrl + 'public/resources/CREDIT_overallplan.pdf'"
          download="CREDIT_overallplan.pdf"
          target="_blank"
        >
          PDF
        </a>
      </li>
      <li>
        Project Team Plan -
        <a
          :href="baseUrl + 'public/resources/CREDIT_projectteamplan.docx'"
          download="CREDIT_projectteamplan.docx"
          target="_blank"
        >
          Word Doc
        </a>
        |
        <a
          :href="baseUrl + 'public/resources/CREDIT_projectteamplan.pdf'"
          download="CREDIT_projectteamplan.pdf"
          target="_blank"
        >
          PDF
        </a>
      </li>
      <li>
        Data Management Plan -
        <a
          :href="baseUrl + 'public/resources/CREDIT_datamanagementplan.docx'"
          download="CREDIT_datamanagementplan.docx"
          target="_blank"
        >
          Word Doc
        </a>
        |
        <a
          :href="baseUrl + 'public/resources/CREDIT_datamanagementplan.pdf'"
          download="CREDIT_datamanagementplan.pdf"
          target="_blank"
        >
          PDF
        </a>
      </li>
    </ul>
  </div>
</template>
