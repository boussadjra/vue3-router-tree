<template>
<svg v-if="name==='folder'" aria-hidden="true" focusable="false" role="img" class="iconify iconify--carbon" width="20px" height="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" style="transform: rotate(360deg);">
    <path d="M11.17 6l3.42 3.41l.58.59H28v16H4V6h7.17m0-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H16l-3.41-3.41A2 2 0 0 0 11.17 4z" fill="currentColor" />
</svg>

<svg v-if="name==='file'" aria-hidden="true" focusable="false" role="img" class="iconify iconify--carbon" width="20px" height="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" style="transform: rotate(360deg);">
    <path d="M25.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7zM18 4.4l5.6 5.6H18V4.4zM24 28H8V4h8v6c0 1.1.9 2 2 2h6v16z" fill="currentColor" />
    <path d="M10 22h12v2H10z" fill="currentColor" />
    <path d="M10 16h12v2H10z" fill="currentColor" />
</svg>

<svg v-if="name==='components'" focusable="false" width="20px" height="20px" viewBox="0 0 32 32">
    <path d="M8 4v4H4V4h4M2 2v8h8V2z" fill="currentColor" />
    <path d="M18 7v4h-4V7h4m-6-2v8h8V5z" fill="currentColor" />
    <path d="M8 16v4H4v-4h4m-6-2v8h8v-8z" fill="currentColor" />
    <path d="M22 10v6h-6v6h-6v8h20V10zm-4 8h4v4h-4zm-2 10h-4v-4h4zm6 0h-4v-4h4zm6 0h-4v-4h4zm0-6h-4v-4h4zm-4-6v-4h4v4z" fill="currentColor" />
</svg>

<svg v-if="name==='dashboard'" focusable="false" width="20px" height="20px" viewBox="0 0 32 32">
    <path d="M24 21h2v5h-2z" fill="currentColor" />
    <path d="M20 16h2v10h-2z" fill="currentColor" />
    <path d="M11 26a5.006 5.006 0 0 1-5-5h2a3 3 0 1 0 3-3v-2a5 5 0 0 1 0 10z" fill="currentColor" />
    <path d="M28 2H4a2.002 2.002 0 0 0-2 2v24a2.002 2.002 0 0 0 2 2h24a2.003 2.003 0 0 0 2-2V4a2.002 2.002 0 0 0-2-2zm0 9H14V4h14zM12 4v7H4V4zM4 28V13h24l.002 15z" fill="currentColor" />
</svg>

<svg v-if="name==='home'" focusable="false" width="20px" height="20px" viewBox="0 0 32 32">
    <path d="M16.61 2.21a1 1 0 0 0-1.24 0L1 13.42L2.24 15L4 13.62V26a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V13.63L29.76 15L31 13.43zM18 26h-4v-8h4zm2 0v-8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8H6V12.06l10-7.79l10 7.8V26z" fill="currentColor" />
</svg>

<svg v-if="name==='mail'" focusable="false" width="20px" height="20px" viewBox="0 0 32 32">
    <path d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.78L6.2 8zM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24z" fill="currentColor" />
</svg>

<svg v-if="name==='forms'" aria-hidden="true" focusable="false" role="img" class="iconify iconify--carbon" width="20px" height="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" style="transform: rotate(360deg);">
    <path d="M2 26h28v2H2z" fill="currentColor"></path>
    <path d="M25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z" fill="currentColor"></path>
</svg>

<svg v-if="name==='pickers'" aria-hidden="true" focusable="false" role="img" class="iconify iconify--carbon" width="20px" height="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" style="transform: rotate(360deg);">
    <path d="M2 27h3v3H2z" fill="currentColor"></path>
    <path d="M29.71 7.29l-5-5a1 1 0 0 0-1.41 0L20 5.59l-1.29-1.3l-1.42 1.42L18.59 7L8.29 17.29A1 1 0 0 0 8 18v1.59l-2.71 2.7a1 1 0 0 0 0 1.41l3 3a1 1 0 0 0 1.41 0l2.71-2.7H14a1 1 0 0 0 .71-.29L25 13.41l1.29 1.3l1.42-1.42l-1.3-1.29l3.3-3.29a1 1 0 0 0 0-1.41zM13.59 22h-2L9 24.59L7.41 23L10 20.41v-2l10-10L23.59 12zM25 10.59L21.41 7L24 4.41L27.59 8z" fill="currentColor"></path>
</svg>
</template>

<script>
export default {
    props: {
        name: String,
    },
};
</script>
