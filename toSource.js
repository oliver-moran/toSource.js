/*
    The MIT License (MIT)

    Copyright (c) 2014 Oliver Moran

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

if (typeof Object.toSource == "undefined") { // only if necessary
    
    /**
     * Returns the source of this Number
     */
    Number.prototype.toSource = function () {
        return this.toString();
    }

    /**
     * Returns the source of this Boolean
     */
    Boolean.prototype.toSource = function () {
        return this.toString();
    }

    /**
     * Returns the source of this String
     */
    String.prototype.toSource = function () {
        var source = this.replace(/"/g, "\"");
        source = source.replace(/\n/g, "\\n");
        source = source.replace(/\r/g, "\\r");
        return "\"" + source + "\"";
    }

    /**
     * Returns the source of a this Function
     */
    Function.prototype.toSource = function () {
        return this.toString();
    }

    /**
     * Returns the source of this Array
     */
    Array.prototype.toSource = function () {
        var source = "[";

        this.forEach(function (el, i, arr) {
            switch (typeof el) {
                case "number":
                case "boolean":
                case "string":
                case "function":
                case "object":
                    source += el.toSource();
                    break;
                default:
                    source += "null";
            }

            if (i < arr.length - 1) source += ", ";
        });

        source += "]";

        return source;
    }

    /**
     * Returns the source of this Object
     */
    Object.prototype.toSource = function () {
        var source = "{";

        var _that = this;
        var props = Object.getOwnPropertyNames(this);
        props.forEach(function(prop, i, arr) {
            switch (typeof _that[prop]) {
                case "number":
                case "boolean":
                case "string":
                case "function":
                case "object":
                    source += prop + ": " + _that[prop].toSource();
                    break;
                default:
                    source += prop + ": " + "null";
            }

            if (i < arr.length - 1) source += ", ";
        });

        source += "}";

        return source;
    }
    
}