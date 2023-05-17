import openGraphConfig from './openGraphConfig';

export const appendMetaOpenGraph = () : void => {
	Object.entries(openGraphConfig).forEach(([property, content]) => {
		const meta = document.createElement('meta');
		meta.setAttribute('property', property);
		meta.content = String(content);
		document.getElementsByTagName('head')[0].appendChild(meta);
	})
}
