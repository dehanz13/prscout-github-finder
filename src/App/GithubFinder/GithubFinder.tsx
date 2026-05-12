import React, { useState } from 'react'
import { kea, actions, listeners, reducers, useActions, useValues, path } from 'kea'
import type { logicType } from './GithubFinderType'

const API_URL = 'https://api.github.com'

const logic = kea<logicType>([
    path(['App', 'GithubFinder', 'GithubFinder']),
    actions({
        setUsername: (username) => ({ username }),
    }),
    reducers({
        username: [
            'keajs',
            {
                setUsername: (_, payload) => payload.username,
            },
        ],
    }),

    listeners({
        setUsername: async ({ username }) => breakpoint => {
            // code to run when the username is set, e.g. fetch repos for that user
            const url = `${API_URL}/users/${username}/repos?per_page=250`

            const response = await window.fetch(url)
            const json = await response.json()

            if (response.status === 200) {
                // we have repos in `json`

            } else {
                // there is an error with `json.message`

            }
        },
    }),
])

export function GithubFinder() {
    const { username } = useValues(logic)
    const { setUsername } = useActions(logic)

    return (
        <div className="example-github-scene">
            <div style={{ marginBottom: 20 }}>
                <h1>Search for a github user</h1>
                <input value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                Repos will come here for user <strong>{username}</strong>
            </div>
        </div>
    )
}
