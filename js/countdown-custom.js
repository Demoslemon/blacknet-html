jQuery(document).ready(function () {
    $(function () {
        // Obtener hoy a las 23:59:59
        const now = new Date();
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

        $('#defaultCountdown').countdown({ until: endOfDay });
    });
});
