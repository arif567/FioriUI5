sap.ui.define(["./BaseController"], function (BaseController) {
	"use strict";

	return BaseController.extend("fiori.tutorial.com.controller.App", {
		onInit: function () {
			// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
	});
});
