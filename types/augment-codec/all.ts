// This file was automatically generated via generate:augment-codec
import { ActorId, MemberId, BlockAndTime, ThreadId, PostId, InputValidationLengthConstraint, WorkingGroup, MemoText, BalanceKind, Address, LookupSource } from '../common';
import { Membership, StakingAccountMemberBinding, BuyMembershipParameters, InviteMembershipParameters } from '../members';
import { CouncilStageAnnouncing, CouncilStageElection, CouncilStageUpdate, CouncilStage, Candidate, CouncilMemberOf, CastVoteOf } from '../council';
import { ForumUserId, ModeratorId, CategoryId, PostReactionId, Category, Thread, Post, PollAlternative, Poll, PrivilegedActor, Thread as ThreadOf } from '../forum';
import { ApplicationId, Application, ApplicationInfo, ApplicationIdSet, ApplicationIdToWorkerIdMap, WorkerId, Worker, WorkerInfo, Opening, OpeningId, StakePolicy, StakeParameters, StorageProviderId, OpeningType, ApplyOnOpeningParameters, Penalty } from '../working-group';
import { Url, IPNSIdentity, ServiceProviderRecord } from '../discovery';
import { ContentId, LiaisonJudgement, DataObject, DataObjectStorageRelationshipId, DataObjectStorageRelationship, DataObjectTypeId, DataObjectType, DataObjectsMap } from '../media';
import { ProposalId, ProposalStatus, Proposal as ProposalOf, ProposalDetails, ProposalDetails as ProposalDetailsOf, VotingResults, ProposalParameters, GeneralProposalParameters, VoteKind, DiscussionThread, DiscussionPost, CreateOpeningParameters, FillOpeningParameters, TerminateRoleParameters, ProposalDecision, ExecutionFailed, Approved, SetLeadParams, ThreadMode, ExecutionStatus, FundingRequestParameters } from '../proposals';
import { Nonce, EntityId, ClassId, CuratorId, CuratorGroupId, VecMaxLength, TextMaxLength, HashedTextMaxLength, PropertyId, SchemaId, SameController, ClassPermissions, PropertyTypeSingle, PropertyTypeVector, PropertyType, PropertyLockingPolicy, Property, Schema, Class, Class as ClassOf, EntityController, EntityPermissions, StoredValue, VecStoredValue, VecStoredPropertyValue, StoredPropertyValue, InboundReferenceCounter, Entity, Entity as EntityOf, CuratorGroup, EntityCreationVoucher, Actor, EntityReferenceCounterSideEffect, ReferenceCounterSideEffects, SideEffects, SideEffect, Status, InputValue, VecInputValue, InputPropertyValue, ParameterizedEntity, ParametrizedPropertyValue, ParametrizedClassPropertyValue, CreateEntityOperation, UpdatePropertyValuesOperation, AddSchemaSupportToEntityOperation, OperationType, InputEntityValuesMap, FailedAt } from '../content-directory';
import { ReferendumStageVoting, ReferendumStageRevealing, ReferendumStage, OptionResult, VotePower } from '../referendum';
import { ConstitutionInfo } from '../constitution';
import { ParticipantId, Title, UpdatedTitle, UpdatedBody, ReplyId, Reply } from '../blog';
import { BountyId, EntryId, BountyActor, AssuranceContractType, FundingType_Limited, FundingType_Perpetual, FundingType, BountyCreationParameters, OracleJudgment_Winner, OracleJudgment, Entry } from '../bounty';

export { ActorId, MemberId, BlockAndTime, ThreadId, PostId, InputValidationLengthConstraint, WorkingGroup, MemoText, BalanceKind, Address, LookupSource, Membership, StakingAccountMemberBinding, BuyMembershipParameters, InviteMembershipParameters, CouncilStageAnnouncing, CouncilStageElection, CouncilStageUpdate, CouncilStage, Candidate, CouncilMemberOf, CastVoteOf, ForumUserId, ModeratorId, CategoryId, PostReactionId, Category, Thread, Post, PollAlternative, Poll, PrivilegedActor, ThreadOf, ApplicationId, Application, ApplicationInfo, ApplicationIdSet, ApplicationIdToWorkerIdMap, WorkerId, Worker, WorkerInfo, Opening, OpeningId, StakePolicy, StakeParameters, StorageProviderId, OpeningType, ApplyOnOpeningParameters, Penalty, Url, IPNSIdentity, ServiceProviderRecord, ContentId, LiaisonJudgement, DataObject, DataObjectStorageRelationshipId, DataObjectStorageRelationship, DataObjectTypeId, DataObjectType, DataObjectsMap, ProposalId, ProposalStatus, ProposalOf, ProposalDetails, ProposalDetailsOf, VotingResults, ProposalParameters, GeneralProposalParameters, VoteKind, DiscussionThread, DiscussionPost, CreateOpeningParameters, FillOpeningParameters, TerminateRoleParameters, ProposalDecision, ExecutionFailed, Approved, SetLeadParams, ThreadMode, ExecutionStatus, FundingRequestParameters, Nonce, EntityId, ClassId, CuratorId, CuratorGroupId, VecMaxLength, TextMaxLength, HashedTextMaxLength, PropertyId, SchemaId, SameController, ClassPermissions, PropertyTypeSingle, PropertyTypeVector, PropertyType, PropertyLockingPolicy, Property, Schema, Class, ClassOf, EntityController, EntityPermissions, StoredValue, VecStoredValue, VecStoredPropertyValue, StoredPropertyValue, InboundReferenceCounter, Entity, EntityOf, CuratorGroup, EntityCreationVoucher, Actor, EntityReferenceCounterSideEffect, ReferenceCounterSideEffects, SideEffects, SideEffect, Status, InputValue, VecInputValue, InputPropertyValue, ParameterizedEntity, ParametrizedPropertyValue, ParametrizedClassPropertyValue, CreateEntityOperation, UpdatePropertyValuesOperation, AddSchemaSupportToEntityOperation, OperationType, InputEntityValuesMap, FailedAt, ReferendumStageVoting, ReferendumStageRevealing, ReferendumStage, OptionResult, VotePower, ConstitutionInfo, ParticipantId, Title, UpdatedTitle, UpdatedBody, ReplyId, Reply, BountyId, EntryId, BountyActor, AssuranceContractType, FundingType_Limited, FundingType_Perpetual, FundingType, BountyCreationParameters, OracleJudgment_Winner, OracleJudgment, Entry };