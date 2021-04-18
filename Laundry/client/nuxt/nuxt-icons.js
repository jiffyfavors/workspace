export default async function (ctx, inject) {
  const icons = {"64x64":"/_nuxt/icons/icon_64.4581ca.png","120x120":"/_nuxt/icons/icon_120.4581ca.png","144x144":"/_nuxt/icons/icon_144.4581ca.png","152x152":"/_nuxt/icons/icon_152.4581ca.png","192x192":"/_nuxt/icons/icon_192.4581ca.png","384x384":"/_nuxt/icons/icon_384.4581ca.png","512x512":"/_nuxt/icons/icon_512.4581ca.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
