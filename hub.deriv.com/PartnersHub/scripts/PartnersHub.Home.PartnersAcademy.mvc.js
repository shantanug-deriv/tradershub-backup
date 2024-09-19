define("PartnersHub.Home.PartnersAcademy.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OS", "oSVar", "OS", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    oSVar: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        var VariablesRecord = VariablesRecordInner;
        VariablesRecord.init();
    }
    class WidgetsRecord extends
    OS.Model.BaseWidgetRecordMap {
        static getWidgetsType() {
            return {};
        }

    }

    class Model extends
    OS.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return VariablesRecord;
        }

        static getWidgetsRecordConstructor() {
            return WidgetsRecord;
        }

        static get hasValidationWidgets() {
            return false;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Home.PartnersAcademy.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Home.PartnersAcademy.mvc$model", "PartnersHub.Home.PartnersAcademy.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Home_PartnersAcademy_mvc_model, PartnersHub_Home_PartnersAcademy_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Home.PartnersAcademy";
        }

        static getAttributes() {
            return {
                codeFunction: "PartnersAcademy",
                functionKey: "27efcd5b-6c0e-47a5-b336-6bec1dc79753",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return PartnersHub_Home_PartnersAcademy_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Home_PartnersAcademy_mvc_controller;
        }

        get title() {


            return "";
        }

        internalRender() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var $text = View.textWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;

            return React.createElement("div", this.getRootNodeProperties(), $if(PartnersHubClientVariables.getIsDesktop(), false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "display: flex; flex-direction: column; gap: 16px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "DesktopPartnersAcademy"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "color: #222; font-size: 20px; font-weight: bold;"
                    },
                    text: [$text(getTranslation("O5WMN_I+K0mefv7hd8Ehnw#Value", "Partner\'s Academy"))],
                    _idProps: {
                        service: idService,
                        uuid: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "display: flex; gap: 24px; justify-content: space-between;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "align-items: center; background: #E9ECEF; border-radius: 8px; display: flex; gap: 24px; height: 203px; justify-content: space-between;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "350px"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "4"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "padding-left: 32px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100px"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "5"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-size: 20px; font-weight: bold;"
                    },
                    text: [$text(getTranslation("sse4z6h_sU6gso1w6w59LA#Value", "Listen, Learn, Read."))],
                    _idProps: {
                        service: idService,
                        uuid: "6"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "height: 100%; padding-top: 16px;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "7"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Image, {
                    extendedProperties: {
                        style: "height: 100%;"
                    },
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.partnershand.png"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "8"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "9"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_Width7"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "BadgesContainer2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "background-color: #E7F2F4; border-radius: 50px; padding: 10px 12px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    style: "partners-academy-badges__badge",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "11"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    extendedProperties: {
                        style: "color: #095A66; font-size: 16px; font-weight: bold;"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "12"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [$text(getTranslation("uHFImDRVWE2MA_64Li66Ww#Value", "Courses"))],
                    _idProps: {
                        service: idService,
                        uuid: "13"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "background-color: #E6F2EF; border-radius: 50px; padding: 10px 12px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "14"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    extendedProperties: {
                        style: "color: #065940; font-size: 16px; font-weight: bold;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "15"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [$text(getTranslation("bM7PjZ4q_EuS25rccTySQg#Value", "Marketing handbooks"))],
                    _idProps: {
                        service: idService,
                        uuid: "16"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "background-color: #E5F0FE; border-radius: 50px; padding: 10px 12px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "17"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    extendedProperties: {
                        style: "color: #12558E; font-size: 16px; font-weight: bold;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "18"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [$text(getTranslation("FLk8QSyiOkuIqtmBfVo4Yw#Value", "Marketing brochures"))],
                    _idProps: {
                        service: idService,
                        uuid: "19"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "background-color: #FEF0E6; border-radius: 50px; padding: 10px 12px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "20"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    extendedProperties: {
                        style: "color: #AD4805; font-size: 16px; font-weight: bold;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "21"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [$text(getTranslation("QNt3K4z9s0mjesfDRLpl7A#Value", "E-books"))],
                    _idProps: {
                        service: idService,
                        uuid: "22"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "background-color: #F1EDFD; border-radius: 50px; padding: 10px 12px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "23"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    extendedProperties: {
                        style: "color: #4E32A2; font-size: 16px; font-weight: bold;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "24"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [$text(getTranslation("DZSAqbT4jkWfN4OqxOKCFA#Value", "Infographics"))],
                    _idProps: {
                        service: idService,
                        uuid: "25"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })))), $text(getTranslation("1adaFkSs6Eu8LQA1B4Z56w#Value", "Everything you need for successful partner marketing."))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "align-items: center; border: 1px solid #DEE2E6; border-radius: 8px; display: flex; flex-direction: column; justify-content: center; padding: 20px; text-align: center;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "26"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Image, {
                    gridProperties: {
                        width: "102px"
                    },
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.academypartnershub.png"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "27"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "text-align: center;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "28"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $text(getTranslation("4rZxxhDTVUWABiMTNsEpdQ#Value", "Scan to download mobile app"))))))];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "display: flex; flex-direction: column; gap: 16px; height: 100%;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "MobilePartnersAcademy"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "30"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "color: #222; font-size: 20px; font-weight: bold;"
                    },
                    text: [$text(getTranslation("naoFGO4guEidXmQftx8rZg#Value", "Partner\'s Academy"))],
                    _idProps: {
                        service: idService,
                        uuid: "31"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "align-items: center; background: #E9ECEF; border-radius: 8px; display: flex; gap: 48px; height: 200px; justify-content: center;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "32"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "padding-left: 48px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100px"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "33"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-size: 20px; font-weight: bold;"
                    },
                    text: [$text(getTranslation("kwwc0W9pKE64IAQBhqqlsg#Value", "Listen, Learn, Read."))],
                    _idProps: {
                        service: idService,
                        uuid: "34"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "height: 100%; padding-top: 16px;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "35"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Image, {
                    extendedProperties: {
                        style: "height: 100%;"
                    },
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.partnershand.png"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "36"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "display: flex; flex-wrap: wrap; gap: 8px;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "BadgesContainer"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "background-color: #E7F2F4; border-radius: 50px; padding: 10px 12px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    style: "partners-academy-badges__badge",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "38"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    extendedProperties: {
                        style: "color: #095A66; font-size: 16px; font-weight: bold;"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "39"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [$text(getTranslation("83dGwifhKk+YOiXkvULi4A#Value", "Courses"))],
                    _idProps: {
                        service: idService,
                        uuid: "40"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "background-color: #E6F2EF; border-radius: 50px; padding: 10px 12px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "41"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    extendedProperties: {
                        style: "color: #065940; font-size: 16px; font-weight: bold;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "42"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [$text(getTranslation("FweTDdT9dkSF1or4BJf5JA#Value", "Marketing handbooks"))],
                    _idProps: {
                        service: idService,
                        uuid: "43"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "background-color: #FEF0E6; border-radius: 50px; padding: 10px 12px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "44"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    extendedProperties: {
                        style: "color: #AD4805; font-size: 16px; font-weight: bold;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "45"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [$text(getTranslation("C987V+27QE+VKjDqaJ0p2w#Value", "E-books"))],
                    _idProps: {
                        service: idService,
                        uuid: "46"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "background-color: #E5F0FE; border-radius: 50px; padding: 10px 12px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "47"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    extendedProperties: {
                        style: "color: #12558E; font-size: 16px; font-weight: bold;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "48"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [$text(getTranslation("uS0lZPuU6kOmtCwieNWUtg#Value", "Marketing brochures"))],
                    _idProps: {
                        service: idService,
                        uuid: "49"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "background-color: #F1EDFD; border-radius: 50px; padding: 10px 12px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "50"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    extendedProperties: {
                        style: "color: #4E32A2; font-size: 16px; font-weight: bold;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "51"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [$text(getTranslation("bDqMK2mJ7kacvPDTaOF8rg#Value", "Infographics"))],
                    _idProps: {
                        service: idService,
                        uuid: "52"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })))), $text(getTranslation("mxqBfVnviEmFswLgQBO7ug#Value", "Everything you need for successful partner marketing.")), React.createElement(OSWidgets.Button, {
                    enabled: true,
                    extendedProperties: {
                        style: "background-color: inherit; border-radius: 50px; color: #ff4450;"
                    },
                    gridProperties: {
                        marginLeft: "0"
                    },
                    isDefault: false,
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.buttonOnClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    },
                    style: "btn btn-primary affiliates-programme__button affiliates-programme__button--mobile",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "53"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "display-flex align-items-center gap-s",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "54"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $if((model.variables.oSVar === "iOS"), false, this, function() {
                    return [React.createElement(OSWidgets.Icon, {
                        extendedProperties: {
                            style: "font-size: 18px; height: 18px; margin-right: 6px; width: 18px;"
                        },
                        gridProperties: {
                            marginLeft: "6px"
                        },
                        icon: "apple",
                        iconSize: /*Twotimes*/ 1,
                        style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("7+ncbqUIq02UA4ZzRWsvCw#ValueExpression.3226745.1", "icon"),
                        visible: true,
                        _idProps: {
                            service: idService,
                            uuid: "55"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    })];
                }, function() {
                    return [$if((model.variables.oSVar === "Android"), false, this, function() {
                        return [React.createElement(OSWidgets.Icon, {
                            extendedProperties: {
                                style: "font-size: 18px;"
                            },
                            icon: "android",
                            iconSize: /*Twotimes*/ 1,
                            style: "icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "56"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }, function() {
                        return [];
                    })];
                }), $text(getTranslation("zkMPCyO8E0aYnIYzzJSMng#Value", "Open Academy app")))))];
            }));
        }
    }

    return View;
});
define("PartnersHub.Home.PartnersAcademy.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Home.PartnersAcademy.mvc$translationsResources", "PartnersHub.Home.PartnersAcademy.mvc$controller.CheckOS.JavaScript1JS", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Home_PartnersAcademy_mvc_TranslationsResources, PartnersHub_Home_PartnersAcademy_mvc_controller_CheckOS_JavaScript1JS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Home_PartnersAcademy_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {};
                this.dataFetchDependentsGraph = {};
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions

            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = [];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "0f057c13-4978-41cc-bf39-42d191e2cbc2");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                // Execute Action: CheckOS
                                controller._checkOS$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }

            get _checkOS$Action() {
                if (!(this.hasOwnProperty("__checkOS$Action"))) {
                    this.__checkOS$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CheckOS", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CheckOS");
                                span.setAttribute("outsystems.function.key", "39dfbbfb-ca9f-4c2e-8898-6a22e5f9d13b");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CheckOS");
                                callContext = controller.callContext(callContext);
                                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                                javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "e586a3b2-7d04-4dd3-b3cc-ec53710175fc");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_Home_PartnersAcademy_mvc_controller_CheckOS_JavaScript1JS, "JavaScript1", "CheckOS", {
                                            OS: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.Home.PartnersAcademy.CheckOS$javaScript1JSResult"))();
                                            jsNodeResult.oSOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OS, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // OS = JavaScript1.OS
                                model.variables.oSVar = javaScript1JSResult.value.oSOut;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__checkOS$Action;
            }
            set _checkOS$Action(value) {
                this.__checkOS$Action = value;
            }

            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "7739673d-2852-42d3-b19a-7e30bc3a3a9e");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onInitialize$Action;
            }
            set _onInitialize$Action(value) {
                this.__onInitialize$Action = value;
            }

            get _buttonOnClick$Action() {
                if (!(this.hasOwnProperty("__buttonOnClick$Action"))) {
                    this.__buttonOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ButtonOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ButtonOnClick");
                                span.setAttribute("outsystems.function.key", "77e19678-9f9b-43c8-9626-f339e5c2d617");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ButtonOnClick");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RudderstackTrackEvent
                                PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                    var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                    rec.actionAttr = "click_cta";
                                    rec.cta_nameAttr = "Open academy app";
                                    rec.cta_placementAttr = "partner academy section";
                                    return rec;
                                }(), "ce_partnershub_form", callContext);
                                // Destination: /PartnersHub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://static.deriv.com/scripts/storeRedirect?app=partnershub", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__buttonOnClick$Action;
            }
            set _buttonOnClick$Action(value) {
                this.__buttonOnClick$Action = value;
            }


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "0f057c13-4978-41cc-bf39-42d191e2cbc2");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            checkOS$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CheckOS__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CheckOS");
                        span.setAttribute("outsystems.function.key", "39dfbbfb-ca9f-4c2e-8898-6a22e5f9d13b");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._checkOS$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "7739673d-2852-42d3-b19a-7e30bc3a3a9e");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            buttonOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ButtonOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ButtonOnClick");
                        span.setAttribute("outsystems.function.key", "77e19678-9f9b-43c8-9626-f339e5c2d617");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._buttonOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }


            // Event Handler Actions
            get onInitializeEventHandler() {
                if (!(this.hasOwnProperty("_onInitializeEventHandler"))) {
                    this._onInitializeEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onInitialize$Action(callContext);

                    };
                }

                return this._onInitializeEventHandler;
            }
            set onInitializeEventHandler(value) {
                this._onInitializeEventHandler = value;
            }

            get onReadyEventHandler() {
                if (!(this.hasOwnProperty("_onReadyEventHandler"))) {
                    this._onReadyEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onReady$Action(callContext);

                    };
                }

                return this._onReadyEventHandler;
            }
            set onReadyEventHandler(value) {
                this._onReadyEventHandler = value;
            }

            get onRenderEventHandler() {
                if (!(this.hasOwnProperty("_onRenderEventHandler"))) {
                    this._onRenderEventHandler = null;
                }

                return this._onRenderEventHandler;
            }
            set onRenderEventHandler(value) {
                this._onRenderEventHandler = value;
            }

            get onDestroyEventHandler() {
                if (!(this.hasOwnProperty("_onDestroyEventHandler"))) {
                    this._onDestroyEventHandler = null;
                }

                return this._onDestroyEventHandler;
            }
            set onDestroyEventHandler(value) {
                this._onDestroyEventHandler = value;
            }

            get onParametersChangedEventHandler() {
                if (!(this.hasOwnProperty("_onParametersChangedEventHandler"))) {
                    this._onParametersChangedEventHandler = null;
                }

                return this._onParametersChangedEventHandler;
            }
            set onParametersChangedEventHandler(value) {
                this._onParametersChangedEventHandler = value;
            }

            get handleError() {
                if (!(this.hasOwnProperty("_handleError"))) {
                    this._handleError = function(ex) {
                        return controller.handleError(ex);
                    };
                }

                return this._handleError;
            }
            set handleError(value) {
                this._handleError = value;
            }

            static checkPermissions() {}

            getDefaultTimeout() {
                return PartnersHubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables
        Controller.registerVariableGroupType("PartnersHub.Home.PartnersAcademy.CheckOS$javaScript1JSResult", [{
            name: "OS",
            attrName: "oSOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.Home.PartnersAcademy.mvc$controller.CheckOS.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if (/iP(hone|od|ad)|mac(intosh|intel|ppc|68k|os)/i.test(navigator.userAgent)) {
            $parameters.OS = "iOS"
        } else {
            $parameters.OS = "Android"
        }
    };
});


define("PartnersHub.Home.PartnersAcademy.mvc$translationsResources.de-DE", [], function() {
    return {
        "zkMPCyO8E0aYnIYzzJSMng#Value": "Open Academy App",
        "7+ncbqUIq02UA4ZzRWsvCw#ValueExpression.3226745.1": "icon",
        "mxqBfVnviEmFswLgQBO7ug#Value": "Alles, was Sie für erfolgreiches Partner-Marketing benötigen.",
        "bDqMK2mJ7kacvPDTaOF8rg#Value": "Infografiken",
        "uS0lZPuU6kOmtCwieNWUtg#Value": "Marketingbroschüren",
        "C987V+27QE+VKjDqaJ0p2w#Value": "E-Books",
        "FweTDdT9dkSF1or4BJf5JA#Value": "Marketinghandbücher",
        "83dGwifhKk+YOiXkvULi4A#Value": "Kurse",
        "kwwc0W9pKE64IAQBhqqlsg#Value": "Hören, Lernen, Lesen.",
        "naoFGO4guEidXmQftx8rZg#Value": "Partnerakademie",
        "4rZxxhDTVUWABiMTNsEpdQ#Value": "Scannen, um die mobile App herunterzuladen",
        "1adaFkSs6Eu8LQA1B4Z56w#Value": "Alles, was Sie für erfolgreiches Partner-Marketing benötigen.",
        "DZSAqbT4jkWfN4OqxOKCFA#Value": "Infografiken",
        "QNt3K4z9s0mjesfDRLpl7A#Value": "E-Books",
        "FLk8QSyiOkuIqtmBfVo4Yw#Value": "Marketingbroschüren",
        "bM7PjZ4q_EuS25rccTySQg#Value": "Marketinghandbücher",
        "uHFImDRVWE2MA_64Li66Ww#Value": "Kurse",
        "sse4z6h_sU6gso1w6w59LA#Value": "Hören, Lernen, Lesen.",
        "O5WMN_I+K0mefv7hd8Ehnw#Value": "Partnerakademie"
    };
});

define("PartnersHub.Home.PartnersAcademy.mvc$translationsResources.es-ES", [], function() {
    return {
        "zkMPCyO8E0aYnIYzzJSMng#Value": "Open Academy App",
        "7+ncbqUIq02UA4ZzRWsvCw#ValueExpression.3226745.1": "icon",
        "mxqBfVnviEmFswLgQBO7ug#Value": "Todo lo que necesitas para un marketing de socios exitoso.",
        "bDqMK2mJ7kacvPDTaOF8rg#Value": "Infografías",
        "uS0lZPuU6kOmtCwieNWUtg#Value": "Folletos de marketing",
        "C987V+27QE+VKjDqaJ0p2w#Value": "E-books",
        "FweTDdT9dkSF1or4BJf5JA#Value": "Manuales de marketing",
        "83dGwifhKk+YOiXkvULi4A#Value": "Cursos",
        "kwwc0W9pKE64IAQBhqqlsg#Value": "Escuchar, Aprender, Leer.",
        "naoFGO4guEidXmQftx8rZg#Value": "Academia del Socio",
        "4rZxxhDTVUWABiMTNsEpdQ#Value": "Escanea para descargar la aplicación móvil",
        "1adaFkSs6Eu8LQA1B4Z56w#Value": "Todo lo que necesitas para un marketing de partners exitoso.",
        "DZSAqbT4jkWfN4OqxOKCFA#Value": "Infografías",
        "QNt3K4z9s0mjesfDRLpl7A#Value": "Libros electrónicos",
        "FLk8QSyiOkuIqtmBfVo4Yw#Value": "Folletos de marketing",
        "bM7PjZ4q_EuS25rccTySQg#Value": "Manuales de marketing",
        "uHFImDRVWE2MA_64Li66Ww#Value": "Cursos",
        "sse4z6h_sU6gso1w6w59LA#Value": "Escuchar, Aprender, Leer.",
        "O5WMN_I+K0mefv7hd8Ehnw#Value": "Academia de Socios"
    };
});

define("PartnersHub.Home.PartnersAcademy.mvc$translationsResources.fr-FR", [], function() {
    return {
        "zkMPCyO8E0aYnIYzzJSMng#Value": "Open Academy App",
        "7+ncbqUIq02UA4ZzRWsvCw#ValueExpression.3226745.1": "icon",
        "mxqBfVnviEmFswLgQBO7ug#Value": "Tout ce dont vous avez besoin pour un marketing de partenaires réussi.",
        "bDqMK2mJ7kacvPDTaOF8rg#Value": "Infographies",
        "uS0lZPuU6kOmtCwieNWUtg#Value": "Brochures marketing",
        "C987V+27QE+VKjDqaJ0p2w#Value": "E-books",
        "FweTDdT9dkSF1or4BJf5JA#Value": "Manuels de marketing",
        "83dGwifhKk+YOiXkvULi4A#Value": "Cours",
        "kwwc0W9pKE64IAQBhqqlsg#Value": "Écouter, Apprendre, Lire.",
        "naoFGO4guEidXmQftx8rZg#Value": "Académie des Partenaires",
        "4rZxxhDTVUWABiMTNsEpdQ#Value": "Scannez pour télécharger l\'application mobile",
        "1adaFkSs6Eu8LQA1B4Z56w#Value": "Tout ce dont vous avez besoin pour un marketing partenaire réussi.",
        "DZSAqbT4jkWfN4OqxOKCFA#Value": "Infographies",
        "QNt3K4z9s0mjesfDRLpl7A#Value": "E-books",
        "FLk8QSyiOkuIqtmBfVo4Yw#Value": "Brochures marketing",
        "bM7PjZ4q_EuS25rccTySQg#Value": "Manuels de marketing",
        "uHFImDRVWE2MA_64Li66Ww#Value": "Cours",
        "sse4z6h_sU6gso1w6w59LA#Value": "Écouter, Apprendre, Lire.",
        "O5WMN_I+K0mefv7hd8Ehnw#Value": "Académie des Partenaires"
    };
});

define("PartnersHub.Home.PartnersAcademy.mvc$translationsResources.it-IT", [], function() {
    return {
        "zkMPCyO8E0aYnIYzzJSMng#Value": "Open Academy App",
        "7+ncbqUIq02UA4ZzRWsvCw#ValueExpression.3226745.1": "icon",
        "mxqBfVnviEmFswLgQBO7ug#Value": "Tutto ciò di cui hai bisogno per un marketing di partner di successo.",
        "bDqMK2mJ7kacvPDTaOF8rg#Value": "Infografiche",
        "uS0lZPuU6kOmtCwieNWUtg#Value": "Brochure di marketing",
        "C987V+27QE+VKjDqaJ0p2w#Value": "E-book",
        "FweTDdT9dkSF1or4BJf5JA#Value": "Manuali di marketing",
        "83dGwifhKk+YOiXkvULi4A#Value": "Corsi",
        "kwwc0W9pKE64IAQBhqqlsg#Value": "Ascoltare, Imparare, Leggere.",
        "naoFGO4guEidXmQftx8rZg#Value": "Accademia dei Partner",
        "4rZxxhDTVUWABiMTNsEpdQ#Value": "Scansiona per scaricare l\'app mobile",
        "1adaFkSs6Eu8LQA1B4Z56w#Value": "Tutto ciò di cui hai bisogno per un marketing partner di successo.",
        "DZSAqbT4jkWfN4OqxOKCFA#Value": "Infografiche",
        "QNt3K4z9s0mjesfDRLpl7A#Value": "E-book",
        "FLk8QSyiOkuIqtmBfVo4Yw#Value": "Brochure di marketing",
        "bM7PjZ4q_EuS25rccTySQg#Value": "Manuali di marketing",
        "uHFImDRVWE2MA_64Li66Ww#Value": "Corsi",
        "sse4z6h_sU6gso1w6w59LA#Value": "Ascoltare, Imparare, Leggere.",
        "O5WMN_I+K0mefv7hd8Ehnw#Value": "Accademia dei Partner"
    };
});

define("PartnersHub.Home.PartnersAcademy.mvc$translationsResources.pl-PL", [], function() {
    return {
        "zkMPCyO8E0aYnIYzzJSMng#Value": "Open Academy App",
        "7+ncbqUIq02UA4ZzRWsvCw#ValueExpression.3226745.1": "icon",
        "mxqBfVnviEmFswLgQBO7ug#Value": "Wszystko, czego potrzebujesz do udanego marketingu partnerskiego.",
        "bDqMK2mJ7kacvPDTaOF8rg#Value": "Infografiki",
        "uS0lZPuU6kOmtCwieNWUtg#Value": "Broszury marketingowe",
        "C987V+27QE+VKjDqaJ0p2w#Value": "E-booki",
        "FweTDdT9dkSF1or4BJf5JA#Value": "Podręczniki marketingowe",
        "83dGwifhKk+YOiXkvULi4A#Value": "Kursy",
        "kwwc0W9pKE64IAQBhqqlsg#Value": "Słuchaj, Ucz się, Czytaj.",
        "naoFGO4guEidXmQftx8rZg#Value": "Akademia Partnerów",
        "4rZxxhDTVUWABiMTNsEpdQ#Value": "Skanuj, aby pobrać aplikację mobilną",
        "1adaFkSs6Eu8LQA1B4Z56w#Value": "Wszystko, czego potrzebujesz do udanego marketingu partnerskiego.",
        "DZSAqbT4jkWfN4OqxOKCFA#Value": "Infografiki",
        "QNt3K4z9s0mjesfDRLpl7A#Value": "E-booki",
        "FLk8QSyiOkuIqtmBfVo4Yw#Value": "Broszury marketingowe",
        "bM7PjZ4q_EuS25rccTySQg#Value": "Podręczniki marketingowe",
        "uHFImDRVWE2MA_64Li66Ww#Value": "Kursy",
        "sse4z6h_sU6gso1w6w59LA#Value": "Słuchaj, Ucz się, Czytaj.",
        "O5WMN_I+K0mefv7hd8Ehnw#Value": "Akademia Partnerów"
    };
});

define("PartnersHub.Home.PartnersAcademy.mvc$translationsResources.pt-PT", [], function() {
    return {
        "zkMPCyO8E0aYnIYzzJSMng#Value": "Open Academy App",
        "7+ncbqUIq02UA4ZzRWsvCw#ValueExpression.3226745.1": "icon",
        "mxqBfVnviEmFswLgQBO7ug#Value": "Tudo o que você precisa para um marketing de parceiros bem-sucedido.",
        "bDqMK2mJ7kacvPDTaOF8rg#Value": "Infografias",
        "uS0lZPuU6kOmtCwieNWUtg#Value": "Brochuras de marketing",
        "C987V+27QE+VKjDqaJ0p2w#Value": "E-books",
        "FweTDdT9dkSF1or4BJf5JA#Value": "Manuais de marketing",
        "83dGwifhKk+YOiXkvULi4A#Value": "Cursos",
        "kwwc0W9pKE64IAQBhqqlsg#Value": "Ouvir, Aprender, Ler.",
        "naoFGO4guEidXmQftx8rZg#Value": "Academia do Parceiro",
        "4rZxxhDTVUWABiMTNsEpdQ#Value": "Digitalize para descarregar a aplicação móvel",
        "1adaFkSs6Eu8LQA1B4Z56w#Value": "Tudo o que você precisa para um marketing de parceiros bem-sucedido.",
        "DZSAqbT4jkWfN4OqxOKCFA#Value": "Infografias",
        "QNt3K4z9s0mjesfDRLpl7A#Value": "E-books",
        "FLk8QSyiOkuIqtmBfVo4Yw#Value": "Brochuras de marketing",
        "bM7PjZ4q_EuS25rccTySQg#Value": "Manuais de marketing",
        "uHFImDRVWE2MA_64Li66Ww#Value": "Cursos",
        "sse4z6h_sU6gso1w6w59LA#Value": "Ouvir, Aprender, Ler.",
        "O5WMN_I+K0mefv7hd8Ehnw#Value": "Academia de Parceiros"
    };
});

define("PartnersHub.Home.PartnersAcademy.mvc$translationsResources.ru-RU", [], function() {
    return {
        "zkMPCyO8E0aYnIYzzJSMng#Value": "Open Academy App",
        "7+ncbqUIq02UA4ZzRWsvCw#ValueExpression.3226745.1": "icon",
        "mxqBfVnviEmFswLgQBO7ug#Value": "Всё, что вам нужно для успешного партнерского маркетинга.",
        "bDqMK2mJ7kacvPDTaOF8rg#Value": "Инфографика",
        "uS0lZPuU6kOmtCwieNWUtg#Value": "Маркетинговые брошюры",
        "C987V+27QE+VKjDqaJ0p2w#Value": "Электронные книги",
        "FweTDdT9dkSF1or4BJf5JA#Value": "Руководства по маркетингу",
        "83dGwifhKk+YOiXkvULi4A#Value": "Курсы",
        "kwwc0W9pKE64IAQBhqqlsg#Value": "Слушать, Учиться, Читать.",
        "naoFGO4guEidXmQftx8rZg#Value": "Академия Партнера",
        "4rZxxhDTVUWABiMTNsEpdQ#Value": "Сканируйте, чтобы скачать мобильное приложение",
        "1adaFkSs6Eu8LQA1B4Z56w#Value": "Всё, что вам нужно для успешного партнерского маркетинга.",
        "DZSAqbT4jkWfN4OqxOKCFA#Value": "Инфографика",
        "QNt3K4z9s0mjesfDRLpl7A#Value": "Электронные книги",
        "FLk8QSyiOkuIqtmBfVo4Yw#Value": "Маркетинговые брошюры",
        "bM7PjZ4q_EuS25rccTySQg#Value": "Руководства по маркетингу",
        "uHFImDRVWE2MA_64Li66Ww#Value": "Курсы",
        "sse4z6h_sU6gso1w6w59LA#Value": "Слушать, Учиться, Читать.",
        "O5WMN_I+K0mefv7hd8Ehnw#Value": "Академия Партнеров"
    };
});

define("PartnersHub.Home.PartnersAcademy.mvc$translationsResources", ["exports", "PartnersHub.Home.PartnersAcademy.mvc$translationsResources.de-DE", "PartnersHub.Home.PartnersAcademy.mvc$translationsResources.es-ES", "PartnersHub.Home.PartnersAcademy.mvc$translationsResources.fr-FR", "PartnersHub.Home.PartnersAcademy.mvc$translationsResources.it-IT", "PartnersHub.Home.PartnersAcademy.mvc$translationsResources.pl-PL", "PartnersHub.Home.PartnersAcademy.mvc$translationsResources.pt-PT", "PartnersHub.Home.PartnersAcademy.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Home_PartnersAcademy_mvc_translationsResources_deDE, PartnersHub_Home_PartnersAcademy_mvc_translationsResources_esES, PartnersHub_Home_PartnersAcademy_mvc_translationsResources_frFR, PartnersHub_Home_PartnersAcademy_mvc_translationsResources_itIT, PartnersHub_Home_PartnersAcademy_mvc_translationsResources_plPL, PartnersHub_Home_PartnersAcademy_mvc_translationsResources_ptPT, PartnersHub_Home_PartnersAcademy_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_Home_PartnersAcademy_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Home_PartnersAcademy_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Home_PartnersAcademy_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Home_PartnersAcademy_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Home_PartnersAcademy_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Home_PartnersAcademy_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Home_PartnersAcademy_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});