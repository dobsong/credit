<script setup lang="ts">
import imgCreditLogo from '@/assets/credit-logo.png'
import { useProjectPlanStore } from '@/stores/projectPlan'
import Button from '@/volt/Button.vue'
import { jsPDF } from 'jspdf'

const projectPlan = useProjectPlanStore()

const generateCompletePlanPDF = (filename: string) => {
  const doc = new jsPDF({
    unit: 'pt',
    format: 'a4',
  })

  doc
    .html(
      `<div style="margin-left: 20px; margin-right:20px; margin-bottom: 20px; font-family: helvetica">
      <div><img src='${imgCreditLogo}' width='95' height='36'></img></div>
       <h1 style="font-weight: bold; margin-block-end: 1.2em; font-size: 2em; text-align:center; font-size: 20px;">Overall Plan</h1>
       <p><b>Project Title: </b> ${projectPlan.title}</p>
       <h2 style="font-weight: bold; margin-block-end: 0.83em; font-size: 14px;">Project Vision:</h2>
       <p>${projectPlan.vision.replace(/\n/g, '<br/>')}</p>
        <h2 style="font-weight: bold; margin-block-end: 0.83em; font-size: 14px;">Layman's Summary:</h2>
        <p>${projectPlan.laymansSummary.replace(/\n/g, '<br/>')}</p>
        <h2 style="font-weight: bold; margin-block-end: 0.83em; font-size: 14px;">Stakeholder Analysis:</h2>
        <p>${projectPlan.stakeholderAnalysis.replace(/\n/g, '<br/>')}</p>
        <h2 style="font-weight: bold; margin-block-end: 0.83em; font-size: 14px;">Approach & Methodology:</h2>
        <p>${projectPlan.approach.replace(/\n/g, '<br/>')}</p>
        <h2 style="font-weight: bold; margin-block-end: 0.83em; font-size: 14px;">Data:</h2>
        <p>${projectPlan.data.replace(/\n/g, '<br/>')}</p>
        <h2 style="font-weight: bold; margin-block-end: 0.83em; font-size: 14px;">Ethics:</h2>
        <p>${projectPlan.ethics.replace(/\n/g, '<br/>')}</p>
        <h2 style="font-weight: bold; margin-block-end: 0.83em; font-size: 14px;">Platform & Resources:</h2>
        <p>${projectPlan.platform.replace(/\n/g, '<br/>')}</p>
        <h2 style="font-weight: bold; margin-block-end: 0.83em; font-size: 14px;">Costings:</h2>
        <p>${projectPlan.costings.replace(/\n/g, '<br/>')}</p>
        </div
       `,
      {
        x: 0,
        y: 20,
        width: 595, // max width of content on PDF
        windowWidth: 595, // width of virtual viewport
      },
    )
    .then(() => {
      doc.save(filename)
    })
}
</script>

<template>
  <Button
    @click="generateCompletePlanPDF('credit-plan.pdf')"
    icon="pi pi-file-pdf"
    iconPos="right"
    label="Export"
    class="mt-4"
  >
  </Button>
</template>
