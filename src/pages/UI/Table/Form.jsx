import React from "react";
import { Label, TextInput, Select } from "flowbite-react";
import { Button } from "./Button";
import { useForm } from "react-hook-form";
import { SUPABASE, supabaseUrl } from "../../../services/supabase.config.js";
export function Form(props) {
  const postMutation = props.postHook();
  const feilds = props.from;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function closeTab() {
    props.toggle((old) => !old);
  }
  async function handleFormSubmit(data) {
    console.log("posted");
    if (data.img_url) {
      const imageName = `${Math.random()}-img`.replaceAll("/", "");
      const imagePath = `${supabaseUrl}/storage/v1/object/public/${props.bucketName}/${imageName}`;
      const { error } = await SUPABASE.storage
        .from(props.bucketName)
        .upload(imageName, data.img_url[0]);
      if (!error) {
        data.img_url = imagePath;
        postMutation.mutate(data);
        closeTab();
      }
    } else {
      postMutation.mutate(data);
      closeTab();
    }
  }
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center  backdrop-blur-md">
      <div className=" flex flex-col gap-8 rounded-2xl bg-background1 p-8 text-grey2">
        <div className="relative">
          <h1 className="title capitalize">add new item</h1>
          <div
            className="absolute right-[-1.5rem] top-[-1.5rem] aspect-square  h-10 cursor-pointer  rounded-xl  text-center  text-3xl text-primary "
            onClick={closeTab}
          >
            x
          </div>
        </div>

        <form
          className="flex flex-col gap-8"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div
            className={`grid grid-rows-${
              Math.floor(feilds.length / 2) + 1
            } w-[50rem] grid-cols-2 gap-4`}
          >
            {feilds.map((e) => (
              <div className="self-start" key={e.name + "group"}>
                {e.type === "select" ? (
                  <>
                    <div className="mb-2 block capitalize">
                      <Label htmlFor={e.value} value={e.name} />
                    </div>
                    <Select
                      className="text-2xl text-background1"
                      id={e.value}
                      {...register(e.value, { required: true })}
                      color={errors[e.value] && "failure"}
                      helperText={
                        <span className="capitalize">
                          this feild is required
                        </span>
                      }
                    >
                      {e.options.map((e) => (
                        <option>{e}</option>
                      ))}
                    </Select>
                  </>
                ) : (
                  <div className="self-start">
                    <div className="mb-2 block capitalize">
                      <Label htmlFor={e.value} value={e.name} />
                    </div>
                    <TextInput
                      className={
                        (e.type !== "file"
                          ? "!text-background1 "
                          : "!text-grey2 ") + "[&_input]:border-0 "
                      }
                      id={e.value}
                      type={e.type}
                      sizing="md"
                      defaultValue={e.type === "number" ? 0 : null}
                      {...register(e.value, { required: !e.notRequired })}
                      color={errors[e.value] ? "failure" : null}
                      helperText={
                        errors[e.value] ? (
                          <span className="capitalize text-secondry">
                            * this feild is required
                          </span>
                        ) : (
                          !errors[e.value] && (
                            <span className="capitalize text-green-600"></span>
                          )
                        )
                      }
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <Button className="" type="submit">
            Add
          </Button>
        </form>
      </div>
    </div>
  );
}
