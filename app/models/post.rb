# == Schema Information
#
# Table name: posts
#
#  id           :bigint(8)        not null, primary key
#  user_id      :integer          not null
#  post_caption :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Post < ApplicationRecord
end