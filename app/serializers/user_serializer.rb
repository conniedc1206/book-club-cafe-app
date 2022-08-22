class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :bio, :avatar
  has_many :memberships
  has_many :book_clubs
  
  has_many :attendances
  has_many :events
end
