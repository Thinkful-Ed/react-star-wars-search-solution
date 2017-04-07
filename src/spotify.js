function _search(name) {
    if (Math.random() < 0.25) {
        return Promise.reject('Something went wrong');
    }
    return fetch(`https://api.spotify.com/v1/search?q=${name}&type=artist`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        }).then(data => data.artists.items.map(artist => artist.name));
}

export function search(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(_search(name)), 500);
    });
}
