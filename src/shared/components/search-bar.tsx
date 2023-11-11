import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@web/components/ui/button";
import { Input } from "@web/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormMessage,
} from "@web/components/ui/form";
import SearchIcon from "./icons/search-icon";
import CloseIcon from "./icons/close-icon";

const formSchema = z.object({
  search: z.string().min(2, {
    message: "Search value must be at least 2 characters.",
  }),
});

export default function SearchBar() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Search...", values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        className="relative md:w-80 flex items-center h-full group/focus w-full min-h-[36px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <>
              <FormControl className="h-full w-full">
                <Input
                  className="bg-secondary focus-visible:ring-0 w-full"
                  placeholder="Search..."
                  type="text"
                  {...field}
                />
              </FormControl>
              {form.getValues("search") && (
                <span className="absolute flex items-center right-0 pr-[56px]">
                  <Button
                    onClick={() => {
                      form.reset();
                    }}
                    size="icon"
                    variant="secondary"
                  >
                    <CloseIcon />
                  </Button>
                </span>
              )}
              <span className="absolute flex items-center right-0 pr-[22px] ">
                <Button
                  className="hover:bg-[#4D4D4D] group/hover group-focus-within/focus:bg-[#4D4D4D] md:group-focus-within/focus:bg-transparent"
                  size="icon"
                  type="submit"
                  variant="secondary"
                >
                  <SearchIcon className="group-hover/hover:fill-white group-focus-within/focus:fill-white md:group-focus-within/focus:fill-current" />
                </Button>
              </span>
            </>
          )}
        />
        <FormMessage />
      </form>
    </Form>
  );
}
