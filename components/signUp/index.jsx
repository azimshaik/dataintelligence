import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Head from "next/head"

export function CardWithForm() {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    
    <Card className="flex flex-col justify-center w-[450px] max-md:w-[350px]">
       
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Chatbot Framework</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col py-2 space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col py-2 space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col py-2 space-y-1.5">
              <Label htmlFor="contact">Contact</Label>
              <Input id="contact" placeholder="Enter your contact" />
            </div>
            {/* <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center md:justify-between">
        {/* <Button variant="outline">Cancel</Button> */}
        <Button>Sign Up</Button>
      </CardFooter>
    </Card>
    </>
  )
}
