class Business < ApplicationRecord
  has_many :employees
  has_one :address
end
