/**
 * Created by igor on 05.12.16.
 */

function JsLoader (options)
{
	var isEcma6 = check();

	function check ()
	{
		try {
			test();
			return true;
		} catch (e) {
			return false;
		}
	}

	function test ()
	{
		class Test {
			constructor() {

			}
		}

		let t = () => {};
		let c = new Test();
	}

	function beArray (val)
	{
		return Array.isArray(val) ? val : [val];
	}

	function inc(option)
	{
		if (!option && Object.prototype.toString.call(option) !== '[object Object]')
			return;

		switch (option.type)
		{
			case 'shift' :
				if (!option.scripts)
					return;

				option.scripts = beArray(option.scripts);

				var url = (option.main || '') + '/';

				url = isEcma6 ? url + (option.shift || '') + '/' : url;

				for (var i = 0; i<option.scripts.length; ++i)
				{
					var s = document.createElement('script');
					s.src = url + option.scripts[i];
					document.head.appendChild(s);
				}

				break;
		}
	}

	options = beArray(options);

	window.onload = function () {
		for (var i = 0; i<options.length; ++i)
			inc(options[i]);
	};
}
