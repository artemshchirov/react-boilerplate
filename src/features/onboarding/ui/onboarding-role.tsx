import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type * as z from "zod";
import { useState, useEffect, useCallback } from "react";
import { RadioGroup, RadioGroupItem } from "@web/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@web/components/ui/form";
import { Button } from "@web/components/ui/button";
import { roleOnboardingValidationSchema } from "../model/role-onboarding-validation-schema";
import { Steps } from "../../../shared/enums/steps";
import STAGGER_CHILD_VARIANTS from "./stagger-variants";

enum Roles {
  Director = "Director",
  Producer = "Producer",
  Cinematographer = "Cinematographer",
  Colorist = "Colorist",
  ProductionDesigner = "Production Designer",
  Other = "Other",
}

interface OnboardingRoleProps {
  onRoleSelect: (role: string) => void;
  onSkip: (step: Steps) => void;
}

function RoleButton({ role, onRoleChange, form }) {
  return (
    <Button
      className="min-w-max bg-lime-200 "
      onClick={() => onRoleChange(role)}
      type="button"
      variant="ghost"
    >
      <RadioGroupItem
        checked={form.watch("type") === role}
        className="bg-red-200 "
        id={role}
        onChange={() => onRoleChange(role)}
        value={role}
      />
      <FormLabel className="font-normal cursor-pointer" htmlFor={role}>
        {role}
      </FormLabel>
    </Button>
  );
}
function OnboardingRole({ onRoleSelect, onSkip }: OnboardingRoleProps) {
  const form = useForm<z.infer<typeof roleOnboardingValidationSchema>>({
    resolver: zodResolver(roleOnboardingValidationSchema),
    defaultValues: { type: undefined },
  });

  const handleRoleSubmit = (
    data: z.infer<typeof roleOnboardingValidationSchema>,
  ) => {
    onRoleSelect(data.type);
    onSkip(Steps.ABOUT);
  };

  const handleRoleChange = useCallback(
    (role: Roles) => {
      form.setValue("type", role);
    },
    [form],
  );

  const [isSkipVisible, setIsSkipVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSkipVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div className="z-10 flex flex-col items-center justify-center mt-10">
      <motion.div
        animate="show"
        className="text-center w-full"
        initial="hidden"
        variants={{ show: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.h1
          className="mb-4 text-2xl font-bold text-[#2F2F2F]"
          variants={STAGGER_CHILD_VARIANTS}
        >
          What&apos;s your main role?
        </motion.h1>
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-6"
          variants={STAGGER_CHILD_VARIANTS}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleRoleSubmit)}>
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Notify me about...</FormLabel>
                    <FormControl>
                      <RadioGroup
                        className="flex"
                        defaultValue={form.watch("type")}
                        onValueChange={form.setValue.bind(null, "type")}
                      >
                        {Object.values(Roles).map((role) => (
                          <FormItem
                            className="flex items-center min-w-max border flex-wrap bg-orange-200"
                            key={role}
                          >
                            <RoleButton
                              form={form}
                              onRoleChange={handleRoleChange}
                              role={role}
                            />
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </motion.div>
        {isSkipVisible ? (
          <motion.button
            animate="show"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg focus:ring focus:ring-offset-2 focus:ring-gray-600 focus:outline-none"
            initial="hidden"
            onClick={() => {
              onSkip(Steps.ABOUT);
            }}
            variants={STAGGER_CHILD_VARIANTS}
          >
            Skip
          </motion.button>
        ) : null}
      </motion.div>
    </motion.div>
  );
}

export default OnboardingRole;
