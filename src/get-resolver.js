export default function getResolver(resolver = '@moyuyc/module-to-cdn') {
    if (typeof resolver === 'function') {
        return resolver;
    }

    return require(resolver);
}
