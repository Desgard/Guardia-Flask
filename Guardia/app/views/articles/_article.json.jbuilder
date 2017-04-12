json.extract! article, :id, :title, :content, :category, :date, :author, :read_num, :comment_num, :created_at, :updated_at
json.url article_url(article, format: :json)
