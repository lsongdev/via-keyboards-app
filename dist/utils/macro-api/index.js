import {MacroAPI, validateMacroExpression} from "./macro-api.js";
import {MacroAPIV11, validateMacroExpressionV11} from "./macro-api.v11.js";
export const getMacroAPI = (protocol, keyboardApi) => protocol >= 11 ? new MacroAPIV11(keyboardApi) : new MacroAPI(keyboardApi);
export const getMacroValidator = (protocol) => protocol >= 11 ? validateMacroExpressionV11 : validateMacroExpression;
