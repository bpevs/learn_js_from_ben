/**
 * UrlSearchParams
 *
 * This can easily be used to parse the url's params. This is useful for creating links,
 * and is also probably the cleanest way to read url params (compared to something more
 * generic, like regex).
 * @reference https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
 */

// Assuming a url such as https://fridaypoetry.org?poem=1234&edit=true

const params = new URLSearchParams(window.location.search);

params.toString(); // params -> ?poem=1234&edit=true

params.has("edit"); // true

params.get("poem"); // 1234

params.delete("edit");

params.append("delete", true);

params.toString(); // params -> ?poem=1234&delete=true
