/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Bathrooms = "bathrooms",
	Comments = "comments",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum BathroomsStatusOptions {
	"CLOSED" = "CLOSED",
	"OPEN" = "OPEN",
	"CLEANING_IN_PROGRESS" = "CLEANING_IN_PROGRESS",
}

export enum BathroomsUrinalTypeOptions {
	"DIVIDED" = "DIVIDED",
	"UNDIVIDED" = "UNDIVIDED",
}

export enum BathroomsDryerTypeOptions {
	"PAPER" = "PAPER",
	"AIR" = "AIR",
	"HAND" = "HAND",
}
export type BathroomsRecord<Tammentities = unknown, Tstocking = unknown> = {
	ammentities?: null | Tammentities
	cleanliness?: string
	comments?: RecordIdString[]
	dryer_type?: BathroomsDryerTypeOptions
	has_men?: boolean
	has_tp?: boolean
	has_women?: boolean
	is_accessible?: boolean
	is_private?: boolean
	latitude?: number
	longitude?: number
	name?: string
	number_of_stalls?: number
	number_of_urinals?: number
	overall_score?: number
	status?: BathroomsStatusOptions
	stocking?: null | Tstocking
	urinal_type?: BathroomsUrinalTypeOptions
	visitor_count?: number
	visitors?: RecordIdString[]
}

export type CommentsRecord = {
	author?: RecordIdString
	field?: RecordIdString
	like_count?: number
	message?: string
}

export type UsersRecord = {
	avatar?: string
	comments?: RecordIdString[]
	createdBathrooms?: RecordIdString[]
	name?: string
	ratedBathrooms?: RecordIdString[]
}

// Response types include system fields and match responses from the PocketBase API
export type BathroomsResponse<Tammentities = unknown, Tstocking = unknown, Texpand = unknown> = Required<BathroomsRecord<Tammentities, Tstocking>> & BaseSystemFields<Texpand>
export type CommentsResponse<Texpand = unknown> = Required<CommentsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	bathrooms: BathroomsRecord
	comments: CommentsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	bathrooms: BathroomsResponse
	comments: CommentsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'bathrooms'): RecordService<BathroomsResponse>
	collection(idOrName: 'comments'): RecordService<CommentsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
