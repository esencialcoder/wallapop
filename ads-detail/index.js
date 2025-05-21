import { initAdsDetailController } from "./adsDetailController.js";
import { pubSub } from "../pubSub.js";

const adDetailElement = document.querySelector("#ad-detail");
const confirmDeleteBtn = document.querySelector("#confirm-delete-btn");
const confirmDeleteModal = document.getElementById("confirmDeleteModal");

initAdsDetailController(adDetailElement, confirmDeleteBtn, confirmDeleteModal, pubSub);
