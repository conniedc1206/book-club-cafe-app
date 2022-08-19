class MembershipSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  belongs_to :book_club
end
