class MembershipSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :book_club_id
  # has_one :user
  # has_one :book_club
end
