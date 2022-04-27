sap.ui.define(['jquery.sap.global'], function (jQuery) {
  "use strict";
  var oResource;
  oResource = new sap.ui.model.resource.ResourceModel({bundleName: "PM030.APP5.i18n.i18n"}).getResourceBundle();

  var PisteTableHome = {
      oData: {
          _persoSchemaVersion: "1.0",
          aColumns: [
              {
                id: "Manutenzione-tbManutenzione-col1",
                order: 0,
                text: oResource.getText("Index"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col2",
                order: 1,
                text: oResource.getText("DataEsecuzione"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col3",
                order: 2,
                text: oResource.getText("DataDiScadenzaNaturale"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-co4",
                order: 3,
                text: oResource.getText("TipoAttivitaPM"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col5",
                order: 4,
                text: oResource.getText("Impianto"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col6",
                order: 5,
                text: oResource.getText("DescrizioneComponente"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col7",
                order: 6,
                text: oResource.getText("SedeTecnica"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col8",
                order: 7,
                text: oResource.getText("Ordine"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col9",
                order: 8,
                text: oResource.getText("OperazioneODM"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col10",
                order: 9,
                text: oResource.getText("LavoroPianificato"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col11",
                order: 10,
                text: oResource.getText("UMLavoroPianificato"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col12",
                order: 11,
                text: oResource.getText("LavoroEffettivo"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col13",
                order: 12,
                text: oResource.getText("UMLavoroEffettivo"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col14",
                order: 13,
                text: oResource.getText("Avviso"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col15",
                order: 114,
                text: oResource.getText("Divisione"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col16",
                order: 15,
                text: oResource.getText("TipoConferma"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col17",
                order: 16,
                text: oResource.getText("TipoOrdine"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col18",
                order: 17,
                text: oResource.getText("Indisponibilita"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col19",
                order: 18,
                text: oResource.getText("Sistema"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col20",
                order: 19,
                text: oResource.getText("Classe"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col21",
                order: 20,
                text: oResource.getText("Frequenza"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col22",
                order: 21,
                text: oResource.getText("UMFrequenza"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col23",
                order: 22,
                text: oResource.getText("Equipment"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col24",
                order: 23,
                text: oResource.getText("Etichetta"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col25",
                order: 24,
                text: oResource.getText("CentroDiLavoro"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col26",
                order: 25,
                text: oResource.getText("Destinatario"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col27",
                order: 26,
                text: oResource.getText("Percorso"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col28",
                order: 27,
                text: oResource.getText("TipoGestione"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col29",
                order: 28,
                text: oResource.getText("Finalita"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col30",
                order: 29,
                text: oResource.getText("GruppoControlli"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col31",
                order: 30,
                text: oResource.getText("Intervento"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col32",
                order: 31,
                text: oResource.getText("DettagliDellaConferma"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col33",
                order: 32,
                text: oResource.getText("DescrizioneDettagliDelleConferme"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col34",
                order: 33,
                text: oResource.getText("TestoEsteso"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col35",
                order: 34,
                text: oResource.getText("OperazioneODM1"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col36",
                order: 35,
                text: oResource.getText("LavoroPianificato1"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col37",
                order: 36,
                text: oResource.getText("UMLavoroPianificato1"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col38",
                order: 37,
                text: oResource.getText("LavoroEffettivo1"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col39",
                order: 38,
                text: oResource.getText("UMLavoroEffettivo1"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col40",
                order: 39,
                text: oResource.getText("OperazioneODM2"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col41",
                order: 40,
                text: oResource.getText("LavoroPianificato2"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col42",
                order: 41,
                text: oResource.getText("UMLavoroPianificato2"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col43",
                order: 42,
                text: oResource.getText("LavoroEffettivo2"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col44",
                order: 43,
                text: oResource.getText("UMLavoroEffettivo2"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col45",
                order: 44,
                text: oResource.getText("OperazioneODM3"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col46",
                order: 45,
                text: oResource.getText("LavoroPianificato3"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col47",
                order: 48,
                text: oResource.getText("UMLavoroPianificato3"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col48",
                order: 47,
                text: oResource.getText("LavoroEffettivo3"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col49",
                order: 48,
                text: oResource.getText("UMLavoroEffettivo3"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col50",
                order: 49,
                text: oResource.getText("OperazioneODM4"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col51",
                order: 50,
                text: oResource.getText("LavoroPianificato4"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col52",
                order: 51,
                text: oResource.getText("UMLavoroPianificato4"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col53",
                order: 52,
                text: oResource.getText("LavoroEffettivo4"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col54",
                order: 55,
                text: oResource.getText("UMLavoroEffettivo4"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col55",
                order: 54,
                text: oResource.getText("OperazioneODM5"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col56",
                order: 55,
                text: oResource.getText("LavoroPianificato5"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col57",
                order: 56,
                text: oResource.getText("UMLavoroPianificato5"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col58",
                order: 57,
                text: oResource.getText("LavoroEffettivo5"),
                visible: true
              },
              {
                id: "Manutenzione-tbManutenzione-col59",
                order: 58,
                text: oResource.getText("UMLavoroEffettivo5"),
                visible: true
              },
          ]
      },

      getPersData: function () {
          var oDeferred = new jQuery.Deferred();
          if (!this._oBundle) {
              this._oBundle = this.oData;
          }
          var oBundle = this._oBundle;
          oDeferred.resolve(oBundle);
          return oDeferred.promise();
      },

      setPersData: function (oBundle) {
          var oDeferred = new jQuery.Deferred();
          this._oBundle = oBundle;
          oDeferred.resolve();
          return oDeferred.promise();
      }
  };

  return PisteTableHome;

});
