export default defineNuxtPlugin({
  name: "mila-setup",
  dependsOn: ["memberships-setup"],
  async setup() {
    console.info("MILA extension active");
    const form = useMembershipsRegistrationForm();

    const is_legal = [
      {
        key: "directus_users__memberships_person_type",
        value: "legal",
      },
    ];

    const is_natural = [
      {
        key: "directus_users__memberships_person_type",
        value: "natural",
      },
    ];

    const is_sepa = [
      {
        key: "directus_users__payments_type",
        value: "sepa",
      },
    ];

    const shares_normal = [
      {
        key: "shares_options",
        value: "normal",
      },
    ];

    const shares_social = [
      {
        key: "shares_options",
        value: "social",
      },
    ];

    const shares_more = [
      {
        key: "shares_options",
        value: "more",
      },
    ];

    form.value = {
      title: "MILA Membership Application",
      public: true,
      submitMode: "postNuxt",
      submitPath: "/api/memberships/register",
      submitLabel: "Submit application",
      fields: [
        {
          type: "section",
          order: 10,
          title: "Willkommen bei MILA!",
          description: "t:mila_form_intro",
        },
        {
          type: "select",
          key: "directus_users__memberships_person_type",
          expand: true,
          label: "t:memberships_form_ptype",
          default: "natural",
          order: 110,
          required: true,
          choices: [
            {
              value: "natural",
              label: "an individual",
            },
            {
              value: "legal",
              label: "an organization",
            },
          ],
        },
        {
          type: "section",
          order: 200,
          title: "User account",
        },
        {
          key: "directus_users__email",
          label: "Email",
          type: "email",
          order: 210,
          required: true,
          icon: "i-mi-mail",
        },
        {
          label: "Password",
          key: "directus_users__password",
          type: "password",
          order: 220,
          required: true,
          icon: "i-mi-lock",
        },
        {
          type: "section",
          title: "Organization",
          order: 300,
          conditions: is_legal,
        },
        {
          label: "Organization name",
          key: "directus_users__memberships_organization_name",
          type: "text",
          order: 310,
          required: true,
          conditions: is_legal,
        },
        {
          label: "Organization type",
          key: "directus_users__memberships_organization_type",
          type: "text",
          order: 320,
          required: true,
          conditions: is_legal,
        },
        {
          label: "Organization ID",
          key: "directus_users__memberships_organization_id",
          type: "text",
          order: 330,
          required: true,
          conditions: is_legal,
        },
        {
          type: "section",
          order: 400,
          title: "Personal data",
          conditions: is_natural,
        },
        {
          type: "section",
          order: 401,
          title: "Organization contact person",
          conditions: is_legal,
        },
        {
          type: "text",
          key: "directus_users__first_name",
          order: 410,
          required: true,
          label: "First name",
        },
        {
          type: "text",
          key: "directus_users__last_name",
          order: 420,
          required: true,
          label: "Last name",
        },
        {
          type: "select",
          order: 430,
          key: "directus_users__memberships_gender",
          label: "Gender",
          required: true,
          choices: [
            {
              value: "diverse",
              label: "Diverse",
            },
            {
              value: "female",
              label: "Female",
            },
            {
              value: "male",
              label: "Male",
            },
          ],
        },
        {
          type: "text",
          key: "directus_users__memberships_phone",
          order: 440,
          label: "Phone",
          icon: "i-mi-call",
        },
        {
          label: "Birthday",
          key: "directus_users__memberships_birthday",
          type: "date",
          order: 450,
          required: true,
          conditions: is_natural,
        },
        {
          label: "Occupation",
          key: "directus_users__memberships_occupation",
          type: "text",
          order: 460,
          required: true,
          conditions: is_natural,
          icon: "i-system-uicons-briefcase",
        },
        {
          type: "section",
          order: 500,
          title: "Address",
          conditions: is_natural,
        },
        {
          type: "section",
          order: 501,
          title: "Organization address",
          conditions: is_legal,
        },
        {
          label: "Street",
          key: "directus_users__memberships_street",
          type: "text",
          order: 510,
          required: true,
        },
        {
          label: "Number",
          type: "text",
          key: "directus_users__memberships_streetnumber",
          order: 511,
          width: "xs",
          required: true,
        },
        {
          label: "Stair",
          key: "directus_users__memberships_stair",
          type: "text",
          order: 512,
          width: "xs",
        },
        {
          label: "Door",
          key: "directus_users__memberships_door",
          type: "text",
          order: 513,
          width: "xs",
        },
        {
          label: "Postcode",
          key: "directus_users__memberships_postcode",
          type: "text",
          order: 514,
          width: "xs",
          required: true,
        },
        {
          label: "City",
          key: "directus_users__memberships_city",
          type: "text",
          order: 515,
          required: true,
        },
        {
          label: "Country",
          key: "directus_users__memberships_country",
          type: "text",
          order: 516,
          required: true,
        },
        {
          type: "section",
          order: 600,
          title: "Type of membership",
          description: "t:mila_form_mtype_orga",
          conditions: is_legal,
        },
        {
          type: "section",
          order: 600,
          title: "Type of membership",

          description: "t:mila_form_mtype_natural",
          conditions: is_natural,
        },
        {
          type: "select",
          key: "memberships__memberships_type",
          expand: true,
          label: "t:memberships_form_mtype",
          required: true,
          order: 610,
          conditions: is_natural,
          choices: [
            {
              value: "active",
              label: "Active",
            },
            {
              value: "investing",
              label: "Investing",
            },
          ],
        },
        {
          type: "select",
          key: "memberships__memberships_type",
          expand: true,
          label: "t:memberships_form_mtype",
          required: true,
          order: 610,
          conditions: is_legal,
          choices: [
            {
              value: "investing",
              label: "Investing",
            },
          ],
        },
        {
          type: "select",
          key: "memberships__memberships_shares_options",
          expand: true,
          label: "How many shares do you want?",
          description: "t:mila_form_shares",
          required: true,
          order: 620,
          choices: [
            { label: "Regelanteil 180 €", value: "normal" },
            { label: "Sozialanteil 20 €", value: "social" },
            { label: "Mehr Anteile", value: "more" },
          ],
        },
        {
          type: "number",
          key: "memberships__memberships_shares",
          label: "Number of shares (9 or more)",
          required: true,
          order: 620,
          conditions: [
            {
              key: "shares_options",
              value: "more",
            },
          ],
          validators: [
            {
              type: "min",
              value: 9,
            },
          ],
        },
        {
          type: "description",
          order: 630,
          label: "Chosen shares",
          description: "t:mila_form_shares_normal",
          conditions: shares_normal,
        },
        {
          type: "description",
          order: 630,
          label: "Chosen shares",
          description: "t:mila_form_shares_social",
          conditions: shares_social,
        },
        {
          type: "description",
          order: 630,
          label: "Chosen shares",
          description: "t:mila_form_shares_more",
          conditions: shares_more,
        },
        // TODO: CALC TOTAL VALUE
        {
          type: "section",
          order: 700,
          title: "Payment details",
          description: "t:mila_form_payment",
        },
        {
          label: "Payment type",
          key: "directus_users__payments_type",
          type: "select",
          order: 710,
          // width: "full",
          required: true,
          choices: [
            {
              value: "sepa",
              label: "I approve SEPA direct debit",
            },
            {
              value: "transfer",
              label: "I transfer the amount myself",
            },
          ],
        },
        {
          label: "Bank account IBAN",
          key: "directus_users__payments_account_iban",
          type: "text",
          order: 720,
          conditions: is_sepa,
          required: true,
        },
        {
          label: "Bank account owner",
          key: "directus_users__payments_account_owner",
          type: "text",
          order: 730,
          conditions: is_sepa,
          required: true,
        },
        {
          type: "section",
          order: 800,
          title: "Survey",
          description: "t:mila_form_survey",
        },
        {
          label: "How did you hear about us?",
          key: "directus_users__mila_survey_contact",
          type: "textarea",
          order: 810,
        },
        {
          label: "What convinced you to join MILA?",
          key: "directus_users__mila_survey_motive",
          type: "textarea",
          order: 820,
        },
        {
          type: "clear",
          order: 825,
        },
        {
          label: "Would you be interested to join a working group?",
          key: "directus_users__mila_groups_interested",
          description:
            "You can find more information about the working groups here: https://www.mila.wien/de/mitmachen/arbeitsgruppen/",
          type: "select",
          multiple: true,
          order: 830,
          choices: [
            {
              value: "1",
              label: "Choice 1",
            },
            {
              value: "2",
              label: "Choice 2",
            },
          ],
        },
        {
          label: "What are your occupations/skills/interests?",
          key: "directus_users__mila_skills",
          type: "select",
          multiple: true,
          order: 840,
          choices: [
            {
              value: "1",
              label: "Choice 1",
            },
            {
              value: "2",
              label: "Choice 2",
            },
          ],
        },
        {
          type: "section",
          title: "Conditions",
          order: 900,
        },
        {
          type: "checkbox",
          key: "_statutes_approval",
          label: "Statutes",
          description: "t:mila_form_check2",
          order: 920,
          width: "full",
          required: true,
        },
        {
          type: "checkbox",
          key: "_data_approval",
          label: "Data use",
          description: "t:mila_form_check3",
          order: 930,
          width: "full",
          required: true,
        },
        {
          type: "checkbox",
          key: "directus_users__mila_pr_approved",
          label: "PR Work",
          description: "t:mila_form_check1",
          order: 931,
          width: "full",
        },
        {
          type: "description",
          order: 940,
          label: "Liability",
          description: "t:mila_form_final1",
        },
        {
          type: "description",
          order: 950,
          label: "Payout upon termination",
          description: "t:mila_form_final2",
        },
        {
          type: "description",
          order: 960,
          label: "Revocation",
          description: "t:mila_form_final3",
        },
      ],
    };
  },
});
