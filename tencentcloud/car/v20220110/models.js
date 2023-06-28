/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const AbstractModel = require("../../common/abstract_model");

/**
 * CreateSession response structure.
 * @class
 */
class CreateSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The server-side session data, which is returned to the SDK.
         * @type {string || null}
         */
        this.ServerSession = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServerSession = 'ServerSession' in params ? params.ServerSession : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroySession response structure.
 * @class
 */
class DestroySessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ApplyConcurrent response structure.
 * @class
 */
class ApplyConcurrentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ApplyConcurrent request structure.
 * @class
 */
class ApplyConcurrentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The user’s unique ID. Tencent Cloud does not parse the ID. You need to manage your own user IDs. Based on your needs, you can either define unique IDs for users or use timestamps to generate random IDs. Make sure the same ID is used when a user reconnects to your application.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Public IP of user’s application client, which is used for nearby scheduling.
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * The project ID.
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * The application version ID.
         * @type {string || null}
         */
        this.ApplicationVersionId = null;

        /**
         * Application ID, which is used only by the multi-application project to specify applications. For a single-application project, this parameter is ignored, and the application bound to the project will be used.
         * @type {string || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ApplicationVersionId = 'ApplicationVersionId' in params ? params.ApplicationVersionId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * DestroySession request structure.
 * @class
 */
class DestroySessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The user’s unique ID. Tencent Cloud does not parse the ID. You need to manage your own user IDs. Based on your needs, you can either define unique IDs for users or use timestamps to generate random IDs. Make sure the same ID is used when a user reconnects to your application.
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * CreateSession request structure.
 * @class
 */
class CreateSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The user’s unique ID. Tencent Cloud does not parse the ID. You need to manage your own user IDs. Based on your needs, you can either define unique IDs for users or use timestamps to generate random IDs. Make sure the same ID is used when a user reconnects to your application.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Public IP of user’s application client, which is used for nearby scheduling.
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * The client-side session data, which is obtained from the SDK. If `RunMode` is `RunWithoutClient`, this parameter can be null.
         * @type {string || null}
         */
        this.ClientSession = null;

        /**
         * The on-cloud running mode.
`RunWithoutClient`: Keep the application running on the cloud even when there are no client connections.
Empty string (default): Keep the application running on the cloud only when there are client connections.
         * @type {string || null}
         */
        this.RunMode = null;

        /**
         * Application startup parameter.
If the user requests a multi-application project or a prelaunch-disabled single-application project, this parameter takes effect.
If the user requests a prelaunch-enabled single-application project, this parameter is invalid.
         * @type {string || null}
         */
        this.ApplicationParameters = null;

        /**
         * The user ID of the host in **multi-person interaction** scenarios, which is required.
If the current user is the host, `HostUserId` must be the same as their `UserId`; otherwise, `HostUserId` should be the host's `UserId`.
         * @type {string || null}
         */
        this.HostUserId = null;

        /**
         * The role in **multi-person interaction** scenarios. Valid values:
`Player`: A user who can operate an application by using a keyboard and mouse
`Viewer`: A user who can only watch the video in the room but cannot operate the application
         * @type {string || null}
         */
        this.Role = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.ClientSession = 'ClientSession' in params ? params.ClientSession : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.ApplicationParameters = 'ApplicationParameters' in params ? params.ApplicationParameters : null;
        this.HostUserId = 'HostUserId' in params ? params.HostUserId : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

module.exports = {
    CreateSessionResponse: CreateSessionResponse,
    DestroySessionResponse: DestroySessionResponse,
    ApplyConcurrentResponse: ApplyConcurrentResponse,
    ApplyConcurrentRequest: ApplyConcurrentRequest,
    DestroySessionRequest: DestroySessionRequest,
    CreateSessionRequest: CreateSessionRequest,

}
