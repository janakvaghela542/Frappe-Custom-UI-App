frappe.after_ajax(function() {
    fappe.call({
        method: "frappe_custom_ui_app.frappe_custom_ui_app.doctype.custom_navbar_settings.custom_navbar_settings.get_navbar_color",
        callback: function(r) {
            if (r.message) {
                $('.navbar').css('background-color', r.message);
            }
        }
    });
});