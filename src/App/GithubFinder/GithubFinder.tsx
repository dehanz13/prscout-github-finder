import React, { useState } from 'react'
import { kea, actions, reducers, useActions, useValues, path } from 'kea'

import type { logicType } from './GithubFinderType'

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
