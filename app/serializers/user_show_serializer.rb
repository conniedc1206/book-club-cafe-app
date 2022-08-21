class UserShowSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :password_digest, :bio, :avatar, :memberships, :book_clubs, :attendances
end