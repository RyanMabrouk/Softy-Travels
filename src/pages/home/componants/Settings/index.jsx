import { Label, TextInput, FileInput } from "flowbite-react";
import React, { useContext, useRef, useState } from "react";
import { Button } from "../../../UI/Table/Button";
import userContext from "../../../../context/UserContext";
export default function Settings() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const { userName, setUserName, userPicture, setUserPicture } =
    useContext(userContext);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background1">
      <div className="rounded-2xl bg-background2 p-8">
        <div className="title text-center text-3xl font-bold capitalize">
          profile
        </div>
        <form
          className="flex flex-col gap-4 p-8 text-grey2 "
          onSubmit={(e) => {
            e.preventDefault();
            if (name) setUserName(name);
            if (image) setUserPicture(image);
            e.target.reset();
          }}
        >
          <div className="flex flex-row gap-6">
            <div className="group relative flex items-center justify-center gap-4">
              <div className="mb-2 block ">
                <Label
                  className="cursor-pointer "
                  htmlFor="picture"
                  value={
                    <>
                      <img
                        className="h-48 min-w-[12rem] rounded-full"
                        src={image ? image : userPicture}
                      />
                      <span className="absolute inset-0 z-20 hidden h-48 w-[11.90rem] cursor-pointer items-center justify-center rounded-full bg-grey1 text-center opacity-80 group-hover:flex">
                        <span className="text-xl font-bold">upload file</span>
                      </span>
                    </>
                  }
                />
              </div>
              <TextInput
                className=" text-grey2 [&_input]:hidden [&_input]:border-0 [&_input]:placeholder:text-grey2"
                id="picture"
                type="file"
                sizing="md"
                accept="image/*"
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
              />
            </div>

            <div className="flex flex-col items-start justify-center">
              <div className="mb-2 block font-medium capitalize">
                <Label htmlFor="name" value="name" />
              </div>
              <TextInput
                className="[&_input]:!bg-background1 [&_input]:text-xl [&_input]:font-medium [&_input]:!text-grey2 "
                id="name"
                type="text"
                sizing="md"
                placeholder={userName}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <Button
            className=" "
            disabled={
              (!name && !image) ||
              (name === userName && image === userPicture) ||
              (!image && name === userName) ||
              (!name && image === userPicture)
            }
            type="submit"
          >
            Apply
          </Button>
        </form>
      </div>
    </div>
  );
}
