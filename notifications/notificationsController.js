import { showSuccessMessage, showErrorMessage, showLoadingMessage, clearMessages } from "./notificationsView.js";

export function initNotificationsController(container, pubSub) {
    if (!container || !pubSub) {
        console.error('⚠️ notificationsController: container o pubSub no definido');
        return;

    pubSub.subscribe('ERROR', (message) => {
        showErrorMessage(container, message);
    });

    pubSub.subscribe('SUCCESS', (message) => {
        showSuccessMessage(container, message);
    });

    pubSub.subscribe('LOADING', () => {
        showLoadingMessage(container);
    });

    pubSub.subscribe('CLEAR', () => {
        clearMessages(container);
    });
}