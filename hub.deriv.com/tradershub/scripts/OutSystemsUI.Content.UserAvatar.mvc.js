define("OutSystemsUI.Content.UserAvatar.mvc$model", ["@outsystems/runtime-core-js", "OutSystemsUI.model"], function(OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Name", "nameIn", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "Jonh Doe";
                    }, false),
                    this.attr("_nameInDataFetchStatus", "_nameInDataFetchStatus", "_nameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("Image", "imageIn", "Image", true, false, OS.DataTypes.DataTypes.BinaryData, function() {
                        return OS.DataTypes.BinaryData.defaultValue;
                    }, false),
                    this.attr("_imageInDataFetchStatus", "_imageInDataFetchStatus", "_imageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("Color", "colorIn", "Color", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.color.primary;
                    }, false),
                    this.attr("_colorInDataFetchStatus", "_colorInDataFetchStatus", "_colorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("Size", "sizeIn", "Size", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_sizeInDataFetchStatus", "_sizeInDataFetchStatus", "_sizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("Shape", "shapeIn", "Shape", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.shape.rounded;
                    }, false),
                    this.attr("_shapeInDataFetchStatus", "_shapeInDataFetchStatus", "_shapeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("IsLight", "isLightIn", "IsLight", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isLightInDataFetchStatus", "_isLightInDataFetchStatus", "_isLightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
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
        setInputs(inputs) {
            if ("Name" in inputs) {
                this.variables.nameIn = inputs.Name;
                if ("_nameInDataFetchStatus" in inputs) {
                    this.variables._nameInDataFetchStatus = inputs._nameInDataFetchStatus;
                }

            }

            if ("Image" in inputs) {
                this.variables.imageIn = inputs.Image;
                if ("_imageInDataFetchStatus" in inputs) {
                    this.variables._imageInDataFetchStatus = inputs._imageInDataFetchStatus;
                }

            }

            if ("Color" in inputs) {
                this.variables.colorIn = inputs.Color;
                if ("_colorInDataFetchStatus" in inputs) {
                    this.variables._colorInDataFetchStatus = inputs._colorInDataFetchStatus;
                }

            }

            if ("Size" in inputs) {
                this.variables.sizeIn = inputs.Size;
                if ("_sizeInDataFetchStatus" in inputs) {
                    this.variables._sizeInDataFetchStatus = inputs._sizeInDataFetchStatus;
                }

            }

            if ("Shape" in inputs) {
                this.variables.shapeIn = inputs.Shape;
                if ("_shapeInDataFetchStatus" in inputs) {
                    this.variables._shapeInDataFetchStatus = inputs._shapeInDataFetchStatus;
                }

            }

            if ("IsLight" in inputs) {
                this.variables.isLightIn = inputs.IsLight;
                if ("_isLightInDataFetchStatus" in inputs) {
                    this.variables._isLightInDataFetchStatus = inputs._isLightInDataFetchStatus;
                }

            }

            if ("ExtendedClass" in inputs) {
                this.variables.extendedClassIn = inputs.ExtendedClass;
                if ("_extendedClassInDataFetchStatus" in inputs) {
                    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("OutSystemsUI.Content.UserAvatar.mvc$view", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "OutSystemsUI.Content.UserAvatar.mvc$model", "OutSystemsUI.Content.UserAvatar.mvc$controller", "@outsystems/runtime-widgets-js"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Content_UserAvatar_mvc_model, OutSystemsUI_Content_UserAvatar_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Content.UserAvatar";
        }

        static getAttributes() {
            return {
                codeFunction: "UserAvatar",
                functionKey: "8fc25ace-aad9-4e38-805d-8882d7d9165a",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
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
            return OutSystemsUI_Content_UserAvatar_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Content_UserAvatar_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(OS.DataTypes.areBinaryNulls(model.variables.imageIn, OS.BuiltinFunctions.nullBinary()), false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        "aria-label": model.getCachedValue(idService.getId("7f6YjdTQxkC4Pxv1mZ0Zag.aria-label"), function() {
                            return ((OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1", "user initials, ") + OS.BuiltinFunctions.substr(OS.BuiltinFunctions.trim(model.variables.nameIn), 0, 1)) + (((OS.BuiltinFunctions.index(OS.BuiltinFunctions.trim(model.variables.nameIn), " ", 0, false, false) > -1)) ? (OS.BuiltinFunctions.substr(OS.BuiltinFunctions.trim(model.variables.nameIn), (OS.BuiltinFunctions.index(OS.BuiltinFunctions.trim(model.variables.nameIn), " ", 0, false, false) + 1), 1)) : ("")));
                        }, function() {
                            return model.variables.nameIn;
                        }),
                        role: "img"
                    },
                    style: model.getCachedValue(idService.getId("7f6YjdTQxkC4Pxv1mZ0Zag.Style"), function() {
                        return ((((((("avatar " + ((((model.variables.sizeIn) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? ((" avatar-" + model.variables.sizeIn)) : (""))) + " ") + "border-radius-") + model.variables.shapeIn) + ((model.variables.isLightIn) ? ((((((" " + "background-") + model.variables.colorIn) + "-lightest text-") + model.variables.colorIn) + "-darker")) : (((" " + "background-") + model.variables.colorIn)))) + " ") + model.variables.extendedClassIn);
                    }, function() {
                        return model.variables.sizeIn;
                    }, function() {
                        return model.variables.shapeIn;
                    }, function() {
                        return model.variables.isLightIn;
                    }, function() {
                        return model.variables.colorIn;
                    }, function() {
                        return model.variables.extendedClassIn;
                    }),
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "0"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._sizeInDataFetchStatus, model.variables._shapeInDataFetchStatus, model.variables._isLightInDataFetchStatus, model.variables._colorInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
                }, React.createElement(OSWidgets.Expression, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    value: model.getCachedValue(idService.getId("+D_RQ3IXnEqBKRHWtTlI+Q.Value"), function() {
                        return (OS.BuiltinFunctions.substr(OS.BuiltinFunctions.trim(model.variables.nameIn), 0, 1) + (((OS.BuiltinFunctions.index(OS.BuiltinFunctions.trim(model.variables.nameIn), " ", 0, false, false) > -1)) ? (OS.BuiltinFunctions.substr(OS.BuiltinFunctions.trim(model.variables.nameIn), (OS.BuiltinFunctions.index(OS.BuiltinFunctions.trim(model.variables.nameIn), " ", 0, false, false) + 1), 1)) : ("")));
                    }, function() {
                        return model.variables.nameIn;
                    }),
                    _idProps: {
                        service: idService,
                        uuid: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._nameInDataFetchStatus)
                }))];
            }, function() {
                return [React.createElement(OSWidgets.Image, {
                    extendedProperties: {
                        title: model.variables.nameIn
                    },
                    imageContent: model.variables.imageIn,
                    style: model.getCachedValue(idService.getId("e9VXyGkMykejiuHggtOyPw.Style"), function() {
                        return ((((("avatar" + ((((model.variables.sizeIn) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? ((" avatar-" + model.variables.sizeIn)) : (""))) + " border-radius-") + model.variables.shapeIn) + " ") + model.variables.extendedClassIn);
                    }, function() {
                        return model.variables.sizeIn;
                    }, function() {
                        return model.variables.shapeIn;
                    }, function() {
                        return model.variables.extendedClassIn;
                    }),
                    type: /*Binary*/ 2,
                    _idProps: {
                        service: idService,
                        uuid: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    imageContent_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._imageInDataFetchStatus),
                    style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._sizeInDataFetchStatus, model.variables._shapeInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
                })];
            }));
        }
    }

    return View;
});
define("OutSystemsUI.Content.UserAvatar.mvc$controller", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Content_UserAvatar_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, OutSystemsUI_Content_UserAvatar_mvc_TranslationsResources);
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


            // Event Handler Actions
            get onInitializeEventHandler() {
                if (!(this.hasOwnProperty("_onInitializeEventHandler"))) {
                    this._onInitializeEventHandler = null;
                }

                return this._onInitializeEventHandler;
            }
            set onInitializeEventHandler(value) {
                this._onInitializeEventHandler = value;
            }

            get onReadyEventHandler() {
                if (!(this.hasOwnProperty("_onReadyEventHandler"))) {
                    this._onReadyEventHandler = null;
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
                return OutSystemsUIController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});


define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.ar", [], function() {
    return {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "الأحرف الأولى من اسم المستخدم ،"
    };
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.de-DE", [], function() {
    return {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "Benutzerinitialen, "
    };
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.en", [], function() {
    return {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "user initials, "
    };
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.es", [], function() {
    return {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "iniciales del usuario, "
    };
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.fr-CA", [], function() {
    return {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "initiales de l\'utilisateur, "
    };
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.fr-FR", [], function() {
    return {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "initiales de l\'utilisateur, "
    };
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.hi-IN", [], function() {
    return {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "आद्याक्षर, "
    };
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.it-IT", [], function() {
    return {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "Iniziali dell\'utente,"
    };
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.ja-JP", [], function() {
    return {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "ユーザーのイニシャル、"
    };
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.ko-KR", [], function() {
    return {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "사용자 이니셜,"
    };
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.nl", [], function() {
    return {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "gebruiker initialen,"
    };
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.pt", [], function() {
    return {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "iniciais do utilizador, "
    };
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.pt-BR", [], function() {
    return {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "iniciais do utilizador, "
    };
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.zh-CN", [], function() {
    return {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "用户缩写，"
    };
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.zh-Hans", [], function() {
    return {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "用户缩写，"
    };
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.zh-Hant", [], function() {
    return {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "用戶縮寫，"
    };
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources", ["exports", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.ar", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.de-DE", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.en", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.es", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.fr-CA", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.fr-FR", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.hi-IN", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.it-IT", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.ja-JP", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.ko-KR", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.nl", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.pt", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.pt-BR", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.zh-CN", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.zh-Hans", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.zh-Hant"], function(exports, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_ar, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_deDE, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_en, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_es, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_frCA, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_frFR, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_hiIN, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_itIT, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_jaJP, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_koKR, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_nl, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_pt, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_ptBR, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_zhCN, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_zhHans, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_zhHant) {
    return {
        "ar": {
            "translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_ar,
            "isRTL": true
        },
        "de-DE": {
            "translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "en": {
            "translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_en,
            "isRTL": false
        },
        "es": {
            "translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_es,
            "isRTL": false
        },
        "fr-CA": {
            "translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_frCA,
            "isRTL": false
        },
        "fr-FR": {
            "translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "hi-IN": {
            "translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_hiIN,
            "isRTL": false
        },
        "it-IT": {
            "translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "ja-JP": {
            "translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_jaJP,
            "isRTL": false
        },
        "ko-KR": {
            "translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_koKR,
            "isRTL": false
        },
        "nl": {
            "translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_nl,
            "isRTL": false
        },
        "pt": {
            "translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_pt,
            "isRTL": false
        },
        "pt-BR": {
            "translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_ptBR,
            "isRTL": false
        },
        "zh-CN": {
            "translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_zhCN,
            "isRTL": false
        },
        "zh-Hans": {
            "translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_zhHans,
            "isRTL": false
        },
        "zh-Hant": {
            "translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_zhHant,
            "isRTL": false
        }
    };
});