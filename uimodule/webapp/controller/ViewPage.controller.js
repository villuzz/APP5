sap.ui.define([
  "./BaseController",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageBox",
  "PM030/APP5/util/manutenzioneTable",
  "sap/m/TablePersoController",
  "sap/ui/export/Spreadsheet",
  "sap/ui/export/library",
], function (Controller, JSONModel, MessageBox, manutenzioneTable, TablePersoController, Spreadsheet, exportLibrary,) {
  "use strict";
  var oResource;
  oResource = new sap.ui.model.resource.ResourceModel({bundleName: "PM030.APP5.i18n.i18n"}).getResourceBundle();
  var EdmType = exportLibrary.EdmType;

  return Controller.extend("PM030.APP5.controller.ViewPage", {
      onInit: function () {
          debugger;
          // leggere i modelli che ci servono
          var sPiani = [
              {
                  Divisione: "123",
              }, {
                  Divisione: "23",
              },
          ];
          var oManutenzione = new sap.ui.model.json.JSONModel();
          oManutenzione.setData(sPiani);
          this.getView().setModel(oManutenzione, "mManutenzione");

          this.getOwnerComponent().getRouter().getRoute("ViewPage").attachPatternMatched(this._onObjectMatched, this);

      },
      _onObjectMatched: function () {
          var oModel = new sap.ui.model.json.JSONModel();
          oModel.setData({
              DataEsecuzione: new Date()
          });
          this.getView().setModel(oModel, "FilterModel");

          this._mViewSettingsDialogs = {};
          this._oTPC = new TablePersoController({table: this.byId("tbManutenzione"), componentName: "Piani", persoService: manutenzioneTable}).activate();
      },
      onSearchResult: function (oEvent) {
          debugger;
          var oModel = this.getView().getModel("FilterModel");
          var divisione = oModel.getData().Divisione;
          if (!divisione) {
              MessageBox.error(oResource.getText("MessageDivisioneObbligatoria"))
          } else {
              this.onSearchFilters();
          }
      },
      onSearchFilters: function () {
          var model = this.getModel("FilterModel");
          var oData = model.getData();

          var oBinding = this.byId("tbManutenzione").getBinding("items");
          if (oBinding.isSuspended()) {
              oBinding.resume();
          }

          var filterArray = [
              new sap.ui.model.Filter("DataEsecuzione", sap.ui.model.FilterOperator.EQ, oData.DataEsecuzione),
          ];
          oData.Divisione.map((d) => {
              filterArray.push(new sap.ui.model.Filter("Divisione", sap.ui.model.FilterOperator.EQ, d));
          });
          oData.Index.map((i) => {
              filterArray.push(new sap.ui.model.Filter("Index", sap.ui.model.FilterOperator.EQ, i));
          });
          oData.TipoSchedulazione.map((tc) => {
              filterArray.push(new sap.ui.model.Filter("TipoConferma", sap.ui.model.FilterOperator.EQ, tc));
          });
          oData.TipoOrdine.map((to) => {
              filterArray.push(new sap.ui.model.Filter("TipoOrdine", sap.ui.model.FilterOperator.EQ, to));
          });
          oData.TipoAttivita.map((ta) => {
              filterArray.push(new sap.ui.model.Filter("TipoAttivita", sap.ui.model.FilterOperator.EQ, ta));
          });
          oData.Indisponibilita.map((ind) => {
              filterArray.push(new sap.ui.model.Filter("Indisponibilita", sap.ui.model.FilterOperator.EQ, ind));
          });
          oData.Divisione.map((sis) => {
              filterArray.push(new sap.ui.model.Filter("Sistema", sap.ui.model.FilterOperator.EQ, sis));
          });
          oData.Classe.map((clas) => {
              filterArray.push(new sap.ui.model.Filter("Classe", sap.ui.model.FilterOperator.EQ, clas));
          });
          oData.Classe.map((freq) => {
              filterArray.push(new sap.ui.model.Filter("Frequenza", sap.ui.model.FilterOperator.EQ, freq));
          });
          oData.Classe.map((freqUm) => {
              filterArray.push(new sap.ui.model.Filter("UMFrequenza", sap.ui.model.FilterOperator.EQ, freqUm));
          });
          oData.Divisione.map((im) => {
              filterArray.push(new sap.ui.model.Filter("Impianto", sap.ui.model.FilterOperator.EQ, im));
          });
          oData.Divisione.map((stc) => {
              filterArray.push(new sap.ui.model.Filter("SedeTecnicaComponente", sap.ui.model.FilterOperator.EQ, stc));
          });
          oData.ComponenteEquipment.map((eq) => {
              filterArray.push(new sap.ui.model.Filter("Equipment", sap.ui.model.FilterOperator.EQ, eq));
          });
          oData.DescrizioneComponente.map((comp) => {
              filterArray.push(new sap.ui.model.Filter("Componente", sap.ui.model.FilterOperator.EQ, comp));
          });
          oData.CentroDiLavoro.map((cdl) => {
              filterArray.push(new sap.ui.model.Filter("CentroDiLavoro", sap.ui.model.FilterOperator.EQ, cdl));
          });
          oData.Destinatario.map((dest) => {
              filterArray.push(new sap.ui.model.Filter("Destinatario", sap.ui.model.FilterOperator.EQ, dest));
          });
          oData.Percorso.map((p) => {
              filterArray.push(new sap.ui.model.Filter("Percorso", sap.ui.model.FilterOperator.EQ, p));
          });
          oData.TipoGestione.map((tg) => {
              filterArray.push(new sap.ui.model.Filter("TipoGestione", sap.ui.model.FilterOperator.EQ, tg));
          });
          oData.Finalita.map((f) => {
              filterArray.push(new sap.ui.model.Filter("Finalita", sap.ui.model.FilterOperator.EQ, f));
          });
          oData.GrupControllo.map((gp) => {
              filterArray.push(new sap.ui.model.Filter("GrupControllo", sap.ui.model.FilterOperator.EQ, gp));
          });
          oData.Collective.map((oc) => {
              filterArray.push(new sap.ui.model.Filter("OrdineConsuntivazione", sap.ui.model.FilterOperator.EQ, oc));
          });
          oData.Classe.map((noodm) => {
              filterArray.push(new sap.ui.model.Filter("NumOpODM", sap.ui.model.FilterOperator.EQ, noodm));
          });
          oData.Classe.map((avv) => {
              filterArray.push(new sap.ui.model.Filter("Avviso", sap.ui.model.FilterOperator.EQ, avv));
          });
          oData.Classe.map((pi) => {
              filterArray.push(new sap.ui.model.Filter("PosIntervento", sap.ui.model.FilterOperator.EQ, pi));
          });
          oData.Classe.map((aes) => {
              filterArray.push(new sap.ui.model.Filter("AESistema", sap.ui.model.FilterOperator.EQ, aes));
          });
          oData.Classe.map((aec) => {
              filterArray.push(new sap.ui.model.Filter("AEContatore", sap.ui.model.FilterOperator.EQ, aec));
          });
          oData.Classe.map((aep) => {
              filterArray.push(new sap.ui.model.Filter("AEProgressivo", sap.ui.model.FilterOperator.EQ, aep));
          });
          oData.Classe.map((aecl) => {
              filterArray.push(new sap.ui.model.Filter("AEClasse", sap.ui.model.FilterOperator.EQ, aecl));
          });
          oData.Classe.map((aest) => {
              filterArray.push(new sap.ui.model.Filter("AESedeTecnica", sap.ui.model.FilterOperator.EQ, aest));
          });
          oData.Classe.map((aee) => {
              filterArray.push(new sap.ui.model.Filter("AEEquipment", sap.ui.model.FilterOperator.EQ, aee));
          });
          oData.Classe.map((aect) => {
              filterArray.push(new sap.ui.model.Filter("AEComponenteTipo", sap.ui.model.FilterOperator.EQ, aect));
          });
          oData.Classe.map((aedc) => {
              filterArray.push(new sap.ui.model.Filter("AEDescrizioneComponente", sap.ui.model.FilterOperator.EQ, aedc));
          });
          oData.Classe.map((aedp) => {
              filterArray.push(new sap.ui.model.Filter("AEDescrizioneProgressivo", sap.ui.model.FilterOperator.EQ, aedp));
          });

          var self = this;
          var oDataModel = self.getModel();

          oDataModel.read("", {
              filters: filterArray,
              success: function (response) { // debugger;

              },
              error: function () { // debugger;
              }
          });
      },
      onDataExport: function () {
          var selectedTab = this.byId("tbManutenzione");

          var aCols,
              oRowBinding,
              oSettings,
              oSheet;

          aCols = this._createColumnConfig(selectedTab);
          oRowBinding = selectedTab.getBinding("items");
          oSettings = {
              workbook: {
                  columns: aCols
              },
              dataSource: oRowBinding,
              fileName: "RegistriStorici.xlsx",
              worker: false
          };
          oSheet = new Spreadsheet(oSettings);
          oSheet.build().finally(function () {
              oSheet.destroy();
          });
      },

      _createColumnConfig: function () {
          var oCols = this.byId("tbManutenzione").getColumns().map((c) => {
              var templ = "";
              var typ = EdmType.String;
              var prop = c.getCustomData()[0].getValue();

              if (prop === "DataEsecuzione") {
                typ = EdmType.Date;
              }
              if (prop === "DataDiScadenzaNaturale") {
                typ = EdmType.Date;
              }

              return {
                  label: c.getHeader().getText(),
                  property: prop,
                  type: typ,
                  format: (value) => {},
                  template: templ
              };
          }) || [];
          return oCols;
      },

      onPersoButtonPressed: function () {
          this._oTPC.openDialog();
      },

      // onBack: function () {
      // sap.ui.core.UIComponent.getRouterFor(this).navTo("TilePage");
      // }

  });
});
