import React, { useEffect, useCallback } from "react";
import service from "../../appwriteServices/config";
import { useSelector } from "react-redux";
import { Button, Input, Logo, RTE } from "../index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "../Select";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    try {
      if (post) {
        const file = data.image[0]
          ? await service.uploadFile(data.image[0])
          : null;
        if (file) {
          service.fileDelete(post.featuredImage);
        }

        const dbPost = await service.updatePost(post.$id, {
          title: data.title,
          content: data.content,
          status: data.status,
          slug: data.slug,
          featuredImage: file ? file.$id : post.featuredImage,
        });
        if (dbPost) navigate(`/post/${dbPost.slug}`);
      } else {
        if (!data.image?.[0]) {
          alert("Please select an image");
          return;
        }
        const file = await service.uploadFile(data.image[0]);
        if (file) {
          const fileId = file.$id;
          const dbPost = await service.createPost({
            title: data.title,
            content: data.content,
            status: data.status,
            slug: data.slug,
            featuredImage: fileId,
            userId: userData.$id,
          });
          if (dbPost) navigate(`/post/${dbPost.slug}`);
        }
      }
    } catch (error) {
      console.error("Error submitting post:", error);
      alert("Error submitting post. Check console for details.");
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, setValue, slugTransform]);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Input
          label="Title"
          placeholder="Post Title"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug"
          placeholder="post-slug"
          {...register("slug", { required: true })}
          onInput={(e) =>
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            })
          }
        />
        <RTE
          label="content: "
          name="content"
          control={control}
          defaultValues={getValues("content")}
        />
      </div>
      <div>
        <Input
          label="Featured Image"
          type="file"
          accept="image/*"
          {...register("image", { required: !post })}
        />
        {post && (
          <div>
            <img
              src={service.getPreviewFile(post.featuredImage)}
              alt={post.title}
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          {...register("status", { required: true })}
        />
        <Button type="submit">{post ? "Update Post" : "Create Post"}</Button>
      </div>
    </form>
  );
}

export default PostForm;
