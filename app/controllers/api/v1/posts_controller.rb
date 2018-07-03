module Api::V1

class PostsController < ApplicationController
    
    def index 
        @posts = Post.order("created_at DESC")
        render json: @posts 
    end

    def create 
        @post = Post.create(post_params)
        render json: @post
    end

    def destroy 
        @post = Post.find(params[:id])
        @post.destroy
    end
    
    private 

    def post_params 
        params.require(:post).permit(:title, :body, :id)
    end

end

end