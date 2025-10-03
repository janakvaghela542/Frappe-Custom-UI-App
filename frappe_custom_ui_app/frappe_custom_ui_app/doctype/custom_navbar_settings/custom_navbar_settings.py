# Copyright (c) 2025, Janak Vaghela and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class CustomNavbarSettings(Document):
	pass

@frappe.whitelist()
def get_navbar_color():
	settings = frappe.get_single("Custom Navbar Settings")
	return settings.navbar_color or '#3b82f6'