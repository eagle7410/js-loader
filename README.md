<a name="JsLoader"></a>

## JsLoader
**Kind**: global class  

* [JsLoader](#JsLoader)
    * [new JsLoader(options)](#new_JsLoader_new)
    * [~check()](#JsLoader..check) ⇒ <code>boolean</code>
    * [~beArray(val)](#JsLoader..beArray) ⇒ <code>\*</code>
    * [~inc(option)](#JsLoader..inc)

<a name="new_JsLoader_new"></a>

### new JsLoader(options)
Detected ecma6. If be detected include ecma6 scripts else ecma5


| Param | Type |
| --- | --- |
| options | <code>\*</code> | 

**Example**  
```js
<script src="../loader.js"></script>
	<script type="text/javascript">
	 JsLoader({
				type : 'shift',
				main : './js',
				shift: 'ecma6',
				scripts : 'test.js'
			});
	</script>
```
<a name="JsLoader..check"></a>

### JsLoader~check() ⇒ <code>boolean</code>
Detected ecma6 in browser

**Kind**: inner method of <code>[JsLoader](#JsLoader)</code>  
<a name="JsLoader..beArray"></a>

### JsLoader~beArray(val) ⇒ <code>\*</code>
Return array

**Kind**: inner method of <code>[JsLoader](#JsLoader)</code>  

| Param |
| --- |
| val | 

<a name="JsLoader..inc"></a>

### JsLoader~inc(option)
Include scripts

**Kind**: inner method of <code>[JsLoader](#JsLoader)</code>  

| Param | Type |
| --- | --- |
| option | <code>object</code> | 

