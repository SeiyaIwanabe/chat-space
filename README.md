# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

| Column | Type | Option |
|--------|------|--------|
| name   | string | null: false, add_index: true |
### Association
- has_many :messages
- has_many :groups_users
- has_many :groups, through: groups_users


## massagesテーブル

| Column | Type | Option |
|--------|------|--------|
| body  | text |
| image | string |
| user_id | references | null: false, foreign_key: true |
| group_id  | references | null: false, foreign_key: true |
### Association
- belongs_to :user
- belongs_to :group


## groupsテーブル

| Column | Type | Option |
|------------|-------------|--------------|
| group_name | string      | null: false, add_index :groups, unique: true |
### Association
- has_many :messages
- has_many :groups_users
- has_many :users, through: groups_users


## groups_usersテーブル

| Column | Type | Option |
|------------|-------------|--------------|
| user_id    | references  | null: false, foreign_key: true |
| group_id   | references  | null: false, foreign_key: true |
### Association
- belongs_to :user
- belongs_to :group