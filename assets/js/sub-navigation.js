const setActiveNavTab = (type, version, apiCurrentPage) => {
    const navigation = document.getElementById('navbarNav');

    if (navigation) {
        const activeNavTab = Array
            .from(navigation.getElementsByTagName('a'))
            .find(el => el.innerText.trim().toLowerCase() === type);

        activeNavTab.classList.add('active');
        activeNavTab.href = `/${type}/${version}/${apiCurrentPage}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const [ apiType, apiVersion, apiCurrentPage ] = window.location.pathname.split('/').filter(el => el);

    setActiveNavTab(apiType, apiVersion, apiCurrentPage);

    // Handle content on a version change event
    const apiVersions = document.getElementById('versions');

    if (apiVersions) {
        apiVersions.addEventListener('change', (e) => {
            e.preventDefault();

            const newVersion = e.target.value;
            const [ apiType, apiVersion, apiCurrentPage ] = window.location.pathname.split('/').filter(el => el);

            if (apiVersion !== newVersion) {
                window.location.assign(`/${apiType}/${newVersion}/${apiCurrentPage}`);
                setActiveNavTab(apiType, newVersion, apiCurrentPage);
            }
        });
    }
});
