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
 * MoveOrganizationMembersToNode request structure.
 * @class
 */
class MoveOrganizationMembersToNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organizational unit ID
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Member UIN list
         * @type {Array.<number> || null}
         */
        this.Uins = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Uins = 'Uins' in params ? params.Uins : null;

    }
}

/**
 * GetOrganization request structure.
 * @class
 */
class GetOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * ListOrganizationMembers request structure.
 * @class
 */
class ListOrganizationMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteOrganizationMemberFromNode request structure.
 * @class
 */
class DeleteOrganizationMemberFromNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * UIN of the member to be deleted
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Organizational unit ID
         * @type {number || null}
         */
        this.NodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;

    }
}

/**
 * Information on an organization member.
 * @class
 */
class OrgMember extends  AbstractModel {
    constructor(){
        super();

        /**
         * UIN
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Notes
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Joining time
         * @type {string || null}
         */
        this.JoinTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.JoinTime = 'JoinTime' in params ? params.JoinTime : null;

    }
}

/**
 * UpdateOrganizationNode response structure.
 * @class
 */
class UpdateOrganizationNodeResponse extends  AbstractModel {
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
 * GetOrganizationMember response structure.
 * @class
 */
class GetOrganizationMemberResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization member UIN
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Organization member name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Notes
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Joining time 
         * @type {string || null}
         */
        this.JoinTime = null;

        /**
         * Organizational unit ID
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Organizational unit name
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * Parent organizational unit ID
         * @type {number || null}
         */
        this.ParentNodeId = null;

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
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.JoinTime = 'JoinTime' in params ? params.JoinTime : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.ParentNodeId = 'ParentNodeId' in params ? params.ParentNodeId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateOrganization request structure.
 * @class
 */
class CreateOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization type; currently its value is fixed as `1`
         * @type {number || null}
         */
        this.OrgType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgType = 'OrgType' in params ? params.OrgType : null;

    }
}

/**
 * DeleteOrganization request structure.
 * @class
 */
class DeleteOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * QuitOrganization response structure.
 * @class
 */
class QuitOrganizationResponse extends  AbstractModel {
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
 * UpdateOrganizationMember response structure.
 * @class
 */
class UpdateOrganizationMemberResponse extends  AbstractModel {
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
 * DeleteOrganizationMembers request structure.
 * @class
 */
class DeleteOrganizationMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of UINs of members to be deleted
         * @type {Array.<number> || null}
         */
        this.Uins = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uins = 'Uins' in params ? params.Uins : null;

    }
}

/**
 * CreateOrganization response structure.
 * @class
 */
class CreateOrganizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization ID
         * @type {number || null}
         */
        this.OrgId = null;

        /**
         * Creator's name
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * Creator's email address
         * @type {string || null}
         */
        this.Mail = null;

        /**
         * Organization type
         * @type {number || null}
         */
        this.OrgType = null;

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
        this.OrgId = 'OrgId' in params ? params.OrgId : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.OrgType = 'OrgType' in params ? params.OrgType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteOrganizationNodes request structure.
 * @class
 */
class DeleteOrganizationNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organizational unit ID list
         * @type {Array.<number> || null}
         */
        this.NodeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeIds = 'NodeIds' in params ? params.NodeIds : null;

    }
}

/**
 * AddOrganizationNode response structure.
 * @class
 */
class AddOrganizationNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organizational unit ID
         * @type {number || null}
         */
        this.NodeId = null;

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
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListOrganizationInvitations response structure.
 * @class
 */
class ListOrganizationInvitationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of invitations
         * @type {Array.<OrgInvitation> || null}
         */
        this.Invitations = null;

        /**
         * Total number of results
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.Invitations) {
            this.Invitations = new Array();
            for (let z in params.Invitations) {
                let obj = new OrgInvitation();
                obj.deserialize(params.Invitations[z]);
                this.Invitations.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AcceptOrganizationInvitation request structure.
 * @class
 */
class AcceptOrganizationInvitationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invitation ID
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ListOrganizationNodeMembers response structure.
 * @class
 */
class ListOrganizationNodeMembersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Member list
         * @type {Array.<OrgMember> || null}
         */
        this.Members = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Members) {
            this.Members = new Array();
            for (let z in params.Members) {
                let obj = new OrgMember();
                obj.deserialize(params.Members[z]);
                this.Members.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetOrganizationMember request structure.
 * @class
 */
class GetOrganizationMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization member UIN
         * @type {number || null}
         */
        this.MemberUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;

    }
}

/**
 * DenyOrganizationInvitation response structure.
 * @class
 */
class DenyOrganizationInvitationResponse extends  AbstractModel {
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
 * SendOrganizationInvitation response structure.
 * @class
 */
class SendOrganizationInvitationResponse extends  AbstractModel {
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
 * Information on an invitation to an organization.
 * @class
 */
class OrgInvitation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invitation ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * UIN of the invitee
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Creator UIN
         * @type {number || null}
         */
        this.HostUin = null;

        /**
         * Creator's name
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * Creator's email address
         * @type {string || null}
         */
        this.HostMail = null;

        /**
         * Invitation status. `-1`: expired; `0`: normal; `1`: accepted; `2`: invalid; `3`: cancelled
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Notes
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Organization type
         * @type {number || null}
         */
        this.OrgType = null;

        /**
         * Time of invitation
         * @type {string || null}
         */
        this.InviteTime = null;

        /**
         * Expiration time
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.HostUin = 'HostUin' in params ? params.HostUin : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.HostMail = 'HostMail' in params ? params.HostMail : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.OrgType = 'OrgType' in params ? params.OrgType : null;
        this.InviteTime = 'InviteTime' in params ? params.InviteTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * UpdateOrganizationMember request structure.
 * @class
 */
class UpdateOrganizationMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member UIN
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Notes
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * QuitOrganization request structure.
 * @class
 */
class QuitOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization ID
         * @type {number || null}
         */
        this.OrgId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgId = 'OrgId' in params ? params.OrgId : null;

    }
}

/**
 * ListOrganizationInvitations request structure.
 * @class
 */
class ListOrganizationInvitationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to list the invitations you received or the invitations you sent. `1`: list the invitations you received; `0`: list the invitations you sent.
         * @type {number || null}
         */
        this.Invited = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Invited = 'Invited' in params ? params.Invited : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * AddOrganizationNode request structure.
 * @class
 */
class AddOrganizationNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parent organizational unit ID
         * @type {number || null}
         */
        this.ParentNodeId = null;

        /**
         * Organizational unit name
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParentNodeId = 'ParentNodeId' in params ? params.ParentNodeId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * ListOrganizationNodeMembers request structure.
 * @class
 */
class ListOrganizationNodeMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organizational unit ID
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * UpdateOrganizationNode request structure.
 * @class
 */
class UpdateOrganizationNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organizational unit ID
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parent organizational unit ID
         * @type {number || null}
         */
        this.ParentNodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ParentNodeId = 'ParentNodeId' in params ? params.ParentNodeId : null;

    }
}

/**
 * CancelOrganizationInvitation request structure.
 * @class
 */
class CancelOrganizationInvitationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invitation ID
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DeleteOrganizationMemberFromNode response structure.
 * @class
 */
class DeleteOrganizationMemberFromNodeResponse extends  AbstractModel {
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
 * DenyOrganizationInvitation request structure.
 * @class
 */
class DenyOrganizationInvitationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invitation ID
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DeleteOrganizationNodes response structure.
 * @class
 */
class DeleteOrganizationNodesResponse extends  AbstractModel {
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
 * DeleteOrganization response structure.
 * @class
 */
class DeleteOrganizationResponse extends  AbstractModel {
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
 * CancelOrganizationInvitation response structure.
 * @class
 */
class CancelOrganizationInvitationResponse extends  AbstractModel {
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
 * AcceptOrganizationInvitation response structure.
 * @class
 */
class AcceptOrganizationInvitationResponse extends  AbstractModel {
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
 * ListOrganizationNodes request structure.
 * @class
 */
class ListOrganizationNodesRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * SendOrganizationInvitation request structure.
 * @class
 */
class SendOrganizationInvitationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * UIN of the invitee
         * @type {number || null}
         */
        this.InviteUin = null;

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Notes
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InviteUin = 'InviteUin' in params ? params.InviteUin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DeleteOrganizationMembers response structure.
 * @class
 */
class DeleteOrganizationMembersResponse extends  AbstractModel {
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
 * GetOrganization response structure.
 * @class
 */
class GetOrganizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization ID
         * @type {number || null}
         */
        this.OrgId = null;

        /**
         * Creator UIN
         * @type {number || null}
         */
        this.HostUin = null;

        /**
         * Creator's name
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * Creator's email address
         * @type {string || null}
         */
        this.Mail = null;

        /**
         * Organization type
         * @type {number || null}
         */
        this.OrgType = null;

        /**
         * Whether the organization is empty or not 
         * @type {number || null}
         */
        this.IsEmpty = null;

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
        this.OrgId = 'OrgId' in params ? params.OrgId : null;
        this.HostUin = 'HostUin' in params ? params.HostUin : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.OrgType = 'OrgType' in params ? params.OrgType : null;
        this.IsEmpty = 'IsEmpty' in params ? params.IsEmpty : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListOrganizationMembers response structure.
 * @class
 */
class ListOrganizationMembersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member list
         * @type {Array.<OrgMember> || null}
         */
        this.Members = null;

        /**
         * Total number of results
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.Members) {
            this.Members = new Array();
            for (let z in params.Members) {
                let obj = new OrgMember();
                obj.deserialize(params.Members[z]);
                this.Members.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListOrganizationNodes response structure.
 * @class
 */
class ListOrganizationNodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organizational unit list
         * @type {Array.<OrgNode> || null}
         */
        this.Nodes = null;

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

        if (params.Nodes) {
            this.Nodes = new Array();
            for (let z in params.Nodes) {
                let obj = new OrgNode();
                obj.deserialize(params.Nodes[z]);
                this.Nodes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MoveOrganizationMembersToNode response structure.
 * @class
 */
class MoveOrganizationMembersToNodeResponse extends  AbstractModel {
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
 * Information on an organizational unit.
 * @class
 */
class OrgNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organizational unit ID
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parent organizational unit ID
         * @type {number || null}
         */
        this.ParentNodeId = null;

        /**
         * Number of members
         * @type {number || null}
         */
        this.MemberCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ParentNodeId = 'ParentNodeId' in params ? params.ParentNodeId : null;
        this.MemberCount = 'MemberCount' in params ? params.MemberCount : null;

    }
}

module.exports = {
    MoveOrganizationMembersToNodeRequest: MoveOrganizationMembersToNodeRequest,
    GetOrganizationRequest: GetOrganizationRequest,
    ListOrganizationMembersRequest: ListOrganizationMembersRequest,
    DeleteOrganizationMemberFromNodeRequest: DeleteOrganizationMemberFromNodeRequest,
    OrgMember: OrgMember,
    UpdateOrganizationNodeResponse: UpdateOrganizationNodeResponse,
    GetOrganizationMemberResponse: GetOrganizationMemberResponse,
    CreateOrganizationRequest: CreateOrganizationRequest,
    DeleteOrganizationRequest: DeleteOrganizationRequest,
    QuitOrganizationResponse: QuitOrganizationResponse,
    UpdateOrganizationMemberResponse: UpdateOrganizationMemberResponse,
    DeleteOrganizationMembersRequest: DeleteOrganizationMembersRequest,
    CreateOrganizationResponse: CreateOrganizationResponse,
    DeleteOrganizationNodesRequest: DeleteOrganizationNodesRequest,
    AddOrganizationNodeResponse: AddOrganizationNodeResponse,
    ListOrganizationInvitationsResponse: ListOrganizationInvitationsResponse,
    AcceptOrganizationInvitationRequest: AcceptOrganizationInvitationRequest,
    ListOrganizationNodeMembersResponse: ListOrganizationNodeMembersResponse,
    GetOrganizationMemberRequest: GetOrganizationMemberRequest,
    DenyOrganizationInvitationResponse: DenyOrganizationInvitationResponse,
    SendOrganizationInvitationResponse: SendOrganizationInvitationResponse,
    OrgInvitation: OrgInvitation,
    UpdateOrganizationMemberRequest: UpdateOrganizationMemberRequest,
    QuitOrganizationRequest: QuitOrganizationRequest,
    ListOrganizationInvitationsRequest: ListOrganizationInvitationsRequest,
    AddOrganizationNodeRequest: AddOrganizationNodeRequest,
    ListOrganizationNodeMembersRequest: ListOrganizationNodeMembersRequest,
    UpdateOrganizationNodeRequest: UpdateOrganizationNodeRequest,
    CancelOrganizationInvitationRequest: CancelOrganizationInvitationRequest,
    DeleteOrganizationMemberFromNodeResponse: DeleteOrganizationMemberFromNodeResponse,
    DenyOrganizationInvitationRequest: DenyOrganizationInvitationRequest,
    DeleteOrganizationNodesResponse: DeleteOrganizationNodesResponse,
    DeleteOrganizationResponse: DeleteOrganizationResponse,
    CancelOrganizationInvitationResponse: CancelOrganizationInvitationResponse,
    AcceptOrganizationInvitationResponse: AcceptOrganizationInvitationResponse,
    ListOrganizationNodesRequest: ListOrganizationNodesRequest,
    SendOrganizationInvitationRequest: SendOrganizationInvitationRequest,
    DeleteOrganizationMembersResponse: DeleteOrganizationMembersResponse,
    GetOrganizationResponse: GetOrganizationResponse,
    ListOrganizationMembersResponse: ListOrganizationMembersResponse,
    ListOrganizationNodesResponse: ListOrganizationNodesResponse,
    MoveOrganizationMembersToNodeResponse: MoveOrganizationMembersToNodeResponse,
    OrgNode: OrgNode,

}
