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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DisableKeysRequest = models.DisableKeysRequest;
const UpdateAliasRequest = models.UpdateAliasRequest;
const ReEncryptRequest = models.ReEncryptRequest;
const UpdateKeyDescriptionResponse = models.UpdateKeyDescriptionResponse;
const GenerateDataKeyResponse = models.GenerateDataKeyResponse;
const EnableKeyRotationRequest = models.EnableKeyRotationRequest;
const EnableKeyRotationResponse = models.EnableKeyRotationResponse;
const CreateKeyRequest = models.CreateKeyRequest;
const EnableKeysResponse = models.EnableKeysResponse;
const DisableKeyResponse = models.DisableKeyResponse;
const GetParametersForImportRequest = models.GetParametersForImportRequest;
const GetParametersForImportResponse = models.GetParametersForImportResponse;
const DecryptResponse = models.DecryptResponse;
const ReEncryptResponse = models.ReEncryptResponse;
const EncryptResponse = models.EncryptResponse;
const CancelKeyDeletionRequest = models.CancelKeyDeletionRequest;
const GenerateRandomRequest = models.GenerateRandomRequest;
const DeleteImportedKeyMaterialRequest = models.DeleteImportedKeyMaterialRequest;
const EnableKeyResponse = models.EnableKeyResponse;
const ScheduleKeyDeletionRequest = models.ScheduleKeyDeletionRequest;
const GetServiceStatusResponse = models.GetServiceStatusResponse;
const ImportKeyMaterialRequest = models.ImportKeyMaterialRequest;
const GetKeyRotationStatusResponse = models.GetKeyRotationStatusResponse;
const EnableKeysRequest = models.EnableKeysRequest;
const ImportKeyMaterialResponse = models.ImportKeyMaterialResponse;
const EncryptRequest = models.EncryptRequest;
const DeleteImportedKeyMaterialResponse = models.DeleteImportedKeyMaterialResponse;
const CreateKeyResponse = models.CreateKeyResponse;
const EnableKeyRequest = models.EnableKeyRequest;
const GetKeyRotationStatusRequest = models.GetKeyRotationStatusRequest;
const ListKeyDetailResponse = models.ListKeyDetailResponse;
const GenerateDataKeyRequest = models.GenerateDataKeyRequest;
const ListKeysRequest = models.ListKeysRequest;
const ListKeysResponse = models.ListKeysResponse;
const DisableKeysResponse = models.DisableKeysResponse;
const DisableKeyRotationResponse = models.DisableKeyRotationResponse;
const UpdateAliasResponse = models.UpdateAliasResponse;
const ScheduleKeyDeletionResponse = models.ScheduleKeyDeletionResponse;
const DecryptRequest = models.DecryptRequest;
const ListKeyDetailRequest = models.ListKeyDetailRequest;
const UpdateKeyDescriptionRequest = models.UpdateKeyDescriptionRequest;
const DisableKeyRequest = models.DisableKeyRequest;
const GenerateRandomResponse = models.GenerateRandomResponse;
const CancelKeyDeletionResponse = models.CancelKeyDeletionResponse;
const GetServiceStatusRequest = models.GetServiceStatusRequest;
const DisableKeyRotationRequest = models.DisableKeyRotationRequest;


/**
 * kms client
 * @class
 */
class KmsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("kms.tencentcloudapi.com", "2019-01-18", credential, region, profile);
    }
    
    /**
     * 本接口用于加密最多为4KB任意数据，可用于加密数据库密码，RSA Key，或其它较小的敏感信息。对于应用的数据加密，使用GenerateDataKey生成的DataKey进行本地数据的加解密操作
     * @param {EncryptRequest} req
     * @param {function(string, EncryptResponse):void} cb
     * @public
     */
    Encrypt(req, cb) {
        let resp = new EncryptResponse();
        this.request("Encrypt", req, resp, cb);
    }

    /**
     * 本接口用于解密密文，得到明文数据。
     * @param {DecryptRequest} req
     * @param {function(string, DecryptResponse):void} cb
     * @public
     */
    Decrypt(req, cb) {
        let resp = new DecryptResponse();
        this.request("Decrypt", req, resp, cb);
    }

    /**
     * This API is used to modify the alias of a CMK. CMKs in `PendingDelete` status cannot be modified.
     * @param {UpdateAliasRequest} req
     * @param {function(string, UpdateAliasResponse):void} cb
     * @public
     */
    UpdateAlias(req, cb) {
        let resp = new UpdateAliasResponse();
        this.request("UpdateAlias", req, resp, cb);
    }

    /**
     * This API is used to import key material into an EXTERNAL CMK. The key obtained through the `GetParametersForImport` API is used to encrypt the key material. You can only reimport the same key material into the specified CMK and set a new expiration time. After the CMK key material is imported, it cannot be replaced. After the key material is expired or deleted, the CMK will remain unavailable until the same key material is reimported. CMKs are independent, which means that the same key material can be imported into different CMKs, but data encrypted by one CMK cannot be decrypted by another one.
Key material can only be imported into CMKs in `Enabled` and `PendingImport` status.
     * @param {ImportKeyMaterialRequest} req
     * @param {function(string, ImportKeyMaterialResponse):void} cb
     * @public
     */
    ImportKeyMaterial(req, cb) {
        let resp = new ImportKeyMaterialResponse();
        this.request("ImportKeyMaterial", req, resp, cb);
    }

    /**
     * 本接口用于禁用一个主密钥，处于禁用状态的Key无法用于加密、解密操作。
     * @param {DisableKeyRequest} req
     * @param {function(string, DisableKeyResponse):void} cb
     * @public
     */
    DisableKey(req, cb) {
        let resp = new DisableKeyResponse();
        this.request("DisableKey", req, resp, cb);
    }

    /**
     * 本接口生成一个数据密钥，您可以用这个密钥进行本地数据的加密。
     * @param {GenerateDataKeyRequest} req
     * @param {function(string, GenerateDataKeyResponse):void} cb
     * @public
     */
    GenerateDataKey(req, cb) {
        let resp = new GenerateDataKeyResponse();
        this.request("GenerateDataKey", req, resp, cb);
    }

    /**
     * 取消CMK的计划删除操作
     * @param {CancelKeyDeletionRequest} req
     * @param {function(string, CancelKeyDeletionResponse):void} cb
     * @public
     */
    CancelKeyDeletion(req, cb) {
        let resp = new CancelKeyDeletionResponse();
        this.request("CancelKeyDeletion", req, resp, cb);
    }

    /**
     * 查询指定的CMK是否开启了密钥轮换功能。
     * @param {GetKeyRotationStatusRequest} req
     * @param {function(string, GetKeyRotationStatusResponse):void} cb
     * @public
     */
    GetKeyRotationStatus(req, cb) {
        let resp = new GetKeyRotationStatusResponse();
        this.request("GetKeyRotationStatus", req, resp, cb);
    }

    /**
     * 用于查询该用户是否已开通KMS服务
     * @param {GetServiceStatusRequest} req
     * @param {function(string, GetServiceStatusResponse):void} cb
     * @public
     */
    GetServiceStatus(req, cb) {
        let resp = new GetServiceStatusResponse();
        this.request("GetServiceStatus", req, resp, cb);
    }

    /**
     * 使用指定CMK对密文重新加密。
     * @param {ReEncryptRequest} req
     * @param {function(string, ReEncryptResponse):void} cb
     * @public
     */
    ReEncrypt(req, cb) {
        let resp = new ReEncryptResponse();
        this.request("ReEncrypt", req, resp, cb);
    }

    /**
     * This API is used to list the KeyIds of CMKs in `Enabled`, `Disabled`, and `PendingImport` status under the account.
     * @param {ListKeysRequest} req
     * @param {function(string, ListKeysResponse):void} cb
     * @public
     */
    ListKeys(req, cb) {
        let resp = new ListKeysResponse();
        this.request("ListKeys", req, resp, cb);
    }

    /**
     * This API is used to generate a random number.
     * @param {GenerateRandomRequest} req
     * @param {function(string, GenerateRandomResponse):void} cb
     * @public
     */
    GenerateRandom(req, cb) {
        let resp = new GenerateRandomResponse();
        this.request("GenerateRandom", req, resp, cb);
    }

    /**
     * 创建用户管理数据密钥的主密钥CMK（Custom Master Key）。
     * @param {CreateKeyRequest} req
     * @param {function(string, CreateKeyResponse):void} cb
     * @public
     */
    CreateKey(req, cb) {
        let resp = new CreateKeyResponse();
        this.request("CreateKey", req, resp, cb);
    }

    /**
     * This API is used to obtain the parameters of the material to be imported into a CMK. The returned `Token` is used as one of the parameters to execute `ImportKeyMaterial`, and the returned `PublicKey` is used to encrypt the key material. The `Token` and `PublicKey` are valid for 24 hours. If they are expired, you will need to call the API again to get a new `Token` and `PublicKey`.
     * @param {GetParametersForImportRequest} req
     * @param {function(string, GetParametersForImportResponse):void} cb
     * @public
     */
    GetParametersForImport(req, cb) {
        let resp = new GetParametersForImportResponse();
        this.request("GetParametersForImport", req, resp, cb);
    }

    /**
     * 根据指定Offset和Limit获取主密钥列表详情。
     * @param {ListKeyDetailRequest} req
     * @param {function(string, ListKeyDetailResponse):void} cb
     * @public
     */
    ListKeyDetail(req, cb) {
        let resp = new ListKeyDetailResponse();
        this.request("ListKeyDetail", req, resp, cb);
    }

    /**
     * 对指定的CMK禁止密钥轮换功能。
     * @param {DisableKeyRotationRequest} req
     * @param {function(string, DisableKeyRotationResponse):void} cb
     * @public
     */
    DisableKeyRotation(req, cb) {
        let resp = new DisableKeyRotationResponse();
        this.request("DisableKeyRotation", req, resp, cb);
    }

    /**
     * 该接口用于批量启用CMK。
     * @param {EnableKeysRequest} req
     * @param {function(string, EnableKeysResponse):void} cb
     * @public
     */
    EnableKeys(req, cb) {
        let resp = new EnableKeysResponse();
        this.request("EnableKeys", req, resp, cb);
    }

    /**
     * CMK计划删除接口，用于指定CMK删除的时间，可选时间区间为[7,30]天
     * @param {ScheduleKeyDeletionRequest} req
     * @param {function(string, ScheduleKeyDeletionResponse):void} cb
     * @public
     */
    ScheduleKeyDeletion(req, cb) {
        let resp = new ScheduleKeyDeletionResponse();
        this.request("ScheduleKeyDeletion", req, resp, cb);
    }

    /**
     * 对指定的CMK开启密钥轮换功能。
     * @param {EnableKeyRotationRequest} req
     * @param {function(string, EnableKeyRotationResponse):void} cb
     * @public
     */
    EnableKeyRotation(req, cb) {
        let resp = new EnableKeyRotationResponse();
        this.request("EnableKeyRotation", req, resp, cb);
    }

    /**
     * 用于启用一个指定的CMK。
     * @param {EnableKeyRequest} req
     * @param {function(string, EnableKeyResponse):void} cb
     * @public
     */
    EnableKey(req, cb) {
        let resp = new EnableKeyResponse();
        this.request("EnableKey", req, resp, cb);
    }

    /**
     * This API is used to delete the imported key material. It is only valid for EXTERNAL CMKs. Specifically, it puts a CMK into `PendingImport` status instead of deleting the CMK, so that the CMK can be used again after key material is reimported. To delete the CMK completely, please call the `ScheduleKeyDeletion` API.
     * @param {DeleteImportedKeyMaterialRequest} req
     * @param {function(string, DeleteImportedKeyMaterialResponse):void} cb
     * @public
     */
    DeleteImportedKeyMaterial(req, cb) {
        let resp = new DeleteImportedKeyMaterialResponse();
        this.request("DeleteImportedKeyMaterial", req, resp, cb);
    }

    /**
     * This API is used to modify the description of the specified CMK. CMKs in `PendingDelete` status cannot be modified.
     * @param {UpdateKeyDescriptionRequest} req
     * @param {function(string, UpdateKeyDescriptionResponse):void} cb
     * @public
     */
    UpdateKeyDescription(req, cb) {
        let resp = new UpdateKeyDescriptionResponse();
        this.request("UpdateKeyDescription", req, resp, cb);
    }

    /**
     * 该接口用于批量禁止CMK的使用。
     * @param {DisableKeysRequest} req
     * @param {function(string, DisableKeysResponse):void} cb
     * @public
     */
    DisableKeys(req, cb) {
        let resp = new DisableKeysResponse();
        this.request("DisableKeys", req, resp, cb);
    }


}
module.exports = KmsClient;
