import * as constants from '../constants'

let _singleton = Symbol();

class FanServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new FanServiceClient(_singleton);
        return this[_singleton]
    }


    findAllFans() {
        return fetch(constants.BASE_URL + 'fan', {
            method: 'get',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    followFan(id) {
        return fetch(constants.BASE_URL + 'fan/' + id, {
            method: 'post',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    getFanContent(id) {
        return fetch(constants.BASE_URL + 'fan/likes/' + id, {
            method: 'get',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })

    }

    getActorContent(id) {
        return fetch(constants.BASE_URL + 'actor/events/' + id, {
            method: 'get',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })

    }

    unfollowFan(item) {
        return fetch(constants.BASE_URL + 'fan/unfollow', {
            method: 'delete',
            credentials: "include",
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    getFollowedFansForUser() {
        return fetch(constants.BASE_URL + 'fan/following', {
            method: 'get',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export default FanServiceClient;