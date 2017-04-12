class Article < ApplicationRecord
  validates :title, length: { maximum: 60 },
                    presence: true
  validates :content, presence: true
  validates :author, presence: true

  def change
    create_table :articles do |t|
      t.string :title
      t.string :content
      t.string :category
      t.string :author
      t.date :date
      t.integer :read_num
      t.integer :comment_num
    end
  end
end
