// Copyright (c) 2025, Janak Vaghela and contributors
// For license information, please see license.txt

frappe.ui.form.on('Custom Navbar Settings', {
	refresh: function(frm) {
		if (frm.doc.navbar_color) {
			$('.navbar').css('background-color', frm.doc.navbar_color);
		}
	},

	navbar_color: function(frm) {
		if (frm.doc.navbar_color) {
			$('.navbar').css('background-color', frm.doc.navbar_color);
		}
	}
});
