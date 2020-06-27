const IFRAME_STYLE = {
	position: 'absolute',
	top: 0,
	opacity: 0,
	filter: 'alpha(opacity=0)',
	left: 0,
	zIndex: 9999,
};

function IframeUploader (props) {
	let file;
	let domain;

	function onChange()  {
		const target = getFormInputNode();
		// ie8/9 don't support FileList Object
		// http://stackoverflow.com/questions/12830058/ie8-input-type-file-get-files
		const newfile = {... file} = {
			uid: 'IAMTHEID',
			name: target.value,
		};
		startUpload();
			return post(newfile);
	}

	function getIframeNode() {
		return document.getElementById('uploaderIframe') as any;
	}

	function getIframeDocument() {
		return getIframeNode().contentDocument;
	}

	function getFormNode() {
		return getIframeDocument().getElementById('form');
	}

	const getFormInputNode = () => {
		return getIframeDocument().getElementById('input');
	}

	const getFormDataNode = () => {
		return getIframeDocument().getElementById('data');
	}

	const getFileForMultiple = (file) => {
		return file;
	}

	const getIframeHTML = (domain) => {
		return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta http-equiv="X-UA-Compatible" content="IE5" />
    <style>
    body,html {padding:0;margin:0;border:0;overflow:hidden;}
    </style>
    </head>
    <body>
    <form method="post"
    encType="multipart/form-data"
    action="" id="form"
    style="display:block;height:9999px;position:relative;overflow:hidden;">
    <input id="input" type="file"
     name="FileField"
     style="position:absolute;top:0;right:0;height:9999px;font-size:9999px;cursor:pointer;"/>
    <span id="data"></span>
    </form>
    </body>
    </html>
    `;
	}

	const initIframeSrc = () => {
			getIframeNode().src = `javascript:void((function(){
        var d = document;
        d.open();
        d.write('');
        d.close();
      })())`;
	}

	const initIframe = () => {
		const iframeNode = getIframeNode();
		let win = iframeNode.contentWindow;
		let doc;
		domain = domain || '';
		initIframeSrc();
		try {
			doc = win.document;
		} catch (e) {
			domain = document.domain;
			initIframeSrc();
			win = iframeNode.contentWindow;
			doc = win.document;
		}
		doc.open('text/html', 'replace');
		doc.write(getIframeHTML(domain));
		doc.close();
		getFormInputNode().onchange = onChange;
	}

	const endUpload = () => {
			file = {};
			// hack avoid batch
			initIframe();
		}

	const startUpload = () => {
	}

	const updateIframeWH = () => {
		const rootNode: any = document.getElementById('root');
		const iframeNode = getIframeNode();
		iframeNode.style.height = `${rootNode.offsetHeight}px`;
		iframeNode.style.width = `${rootNode.offsetWidth}px`;
	}

	const post = (file) => {
		const formNode = getFormNode();
		const dataSpan = getFormDataNode();
		formNode.submit();
		dataSpan.innerHTML = '';
	}

		// const {
    //   component: Tag, disabled, className,
		// 	prefixCls, children, style,
    // } = this.props;
		// const iframeStyle = Object.assign({}, IFRAME_STYLE, {
		// 	display: this.state.uploading || disabled ? 'none' : ''
		// });

		const iframe = document.createElement('iframe');
		iframe.id = 'uploaderIframe';
		document.appendChild(iframe)
		updateIframeWH();
		initIframe();
}

export default IframeUploader;