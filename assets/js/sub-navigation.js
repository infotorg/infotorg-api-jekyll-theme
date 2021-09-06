const getUrlParts = () => {
    const [
        apiCurrentPage,
        apiVersion,
        apiType,
        ...baseUrl
    ] = window.location.pathname.split('/').filter(el => el).reverse();

    return {
        apiCurrentPage,
        apiVersion,
        apiType,
        baseUrl
    };
};

const setActiveNavTab = (baseUrl, type, version, apiCurrentPage) => {
    const navigation = document.getElementById('navbarNav');

    if (!navigation) {
        return;
    }

    const activeNavTab = Array
        .from(navigation.getElementsByTagName('a'))
        .find(el => el.innerText.trim().toLowerCase() === type);

    if (activeNavTab !== undefined) {
        activeNavTab.classList.add('active');
        activeNavTab.href = `${baseUrl}/${type}/${version}/${apiCurrentPage}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const {
        apiCurrentPage,
        apiVersion,
        apiType,
        baseUrl
    } = getUrlParts();

    setActiveNavTab(baseUrl, apiType, apiVersion, apiCurrentPage);

    // Handle content on a version change event
    const apiVersions = document.getElementById('versions');

    if (!apiVersions) {
        return;
    }

    apiVersions.addEventListener('change', (e) => {
        e.preventDefault();

        const newVersion = e.target.value;
        const {
            apiCurrentPage,
            apiVersion,
            apiType,
            baseUrl
        } = getUrlParts();

        if (apiVersion === newVersion) {
            return;
        }

        window.location.assign(`${baseUrl}/${apiType}/${newVersion}/${apiCurrentPage}`);
        setActiveNavTab(baseUrl, apiType, newVersion, apiCurrentPage);
    });
});
