import { defineCustomElement } from "vue";
import TheFooter from "./TheFooter.ce.vue";

const TheFooterElement = defineCustomElement(TheFooter);

customElements.define("the-footer", TheFooterElement);
