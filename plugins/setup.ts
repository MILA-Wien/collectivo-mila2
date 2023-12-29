export default defineNuxtPlugin({
  name: "mila-setup",
  dependsOn: ["memberships-setup"],
  async setup() {
    console.info("MILA extension active");
    const form = useMembershipsRegistrationForm();

    const is_legal = [
      {
        key: "directus_users.memberships_person_type",
        value: "legal",
      },
    ];

    const is_natural = [
      {
        key: "directus_users.memberships_person_type",
        value: "natural",
      },
    ];

    const is_sepa = [
      {
        key: "directus_users.payments_type",
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
      title: "Membership application form",
      public: true,
      submitMode: "postNuxt",
      submitPath: "/api/memberships/register",
      fields: {
        section_welcome: {
          type: "section",
          order: 10,
          title: "Willkommen bei MILA!",
          description: "t:mila_form_intro",
        },
        section_person_type: {
          type: "section",
          order: 100,
          title: "Type of person",
        },
        "directus_users.memberships_person_type": {
          type: "select-radio",
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
        section_account: {
          type: "section",
          order: 200,
          title: "User account",
        },
        "directus_users.email": {
          label: "Email",
          type: "email",
          order: 210,
          required: true,
          icon: "i-mi-mail",
        },
        "directus_users.password": {
          label: "Password",
          type: "password",
          order: 220,
          required: true,
          icon: "i-mi-lock",
        },
        section_organization: {
          type: "section",
          title: "Organization",
          order: 300,
          conditions: is_legal,
        },
        "directus_users.memberships_organization_name": {
          label: "Organization name",
          type: "text",
          order: 310,
          required: true,
          conditions: is_legal,
        },
        "directus_users.memberships_organization_type": {
          label: "Organization type",
          type: "text",
          order: 320,
          required: true,
          conditions: is_legal,
        },
        "directus_users.memberships_organization_id": {
          label: "Organization ID",
          type: "text",
          order: 330,
          required: true,
          conditions: is_legal,
        },
        section_personal_data: {
          type: "section",
          order: 400,
          title: "Personal data",
          conditions: is_natural,
        },
        section_personal_data_legal: {
          type: "section",
          order: 401,
          title: "Organization Contact person",
          conditions: is_legal,
        },
        "directus_users.first_name": {
          type: "text",
          order: 410,
          required: true,
          label: "First name",
        },
        "directus_users.last_name": {
          type: "text",
          order: 420,
          required: true,
          label: "Last name",
        },
        "directus_users.memberships_gender": {
          type: "select",
          order: 430,
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
        "directus_users.memberships_phone": {
          type: "text",
          order: 440,
          label: "Phone",
          icon: "i-mi-call",
        },
        "directus_users.memberships_birthday": {
          label: "Birthday",
          type: "date",
          order: 450,
          default: "2000-01-01",
          required: true,
          conditions: is_natural,
        },
        "directus_users.memberships_occupation": {
          label: "Occupation",
          type: "text",
          order: 460,
          required: true,
          conditions: is_natural,
          icon: "i-system-uicons-briefcase",
        },
        section_address: {
          type: "section",
          order: 500,
          title: "Address",
          conditions: is_natural,
        },
        section_address_legal: {
          type: "section",
          order: 501,
          title: "Organization Address",
          conditions: is_legal,
        },
        "directus_users.memberships_street": {
          label: "Street",
          type: "text",
          order: 510,
          required: true,
        },
        "directus_users.memberships_streetnumber": {
          label: "Number",
          type: "text",
          order: 511,
          width: "xs",
          required: true,
        },
        "directus_users.memberships_stair": {
          label: "Stair",
          type: "text",
          order: 512,
          width: "xs",
        },
        "directus_users.memberships_door": {
          label: "Door",
          type: "text",
          order: 513,
          width: "xs",
        },
        "directus_users.memberships_postcode": {
          label: "Postcode",
          type: "text",
          order: 514,
          width: "xs",
          required: true,
        },
        "directus_users.memberships_city": {
          label: "City",
          type: "text",
          order: 515,
          required: true,
        },
        "directus_users.memberships_country": {
          label: "Country",
          type: "text",
          order: 516,
          required: true,
        },
        section_membership: {
          type: "section",
          order: 600,
          title: "Type of membership",
        },
        description_mtype_orga: {
          type: "description",
          order: 601,
          description: "t:mila_form_mtype_orga",
          conditions: is_legal,
        },
        description_mtype_natural: {
          type: "description",
          order: 601,
          description: "t:mila_form_mtype_natural",
          conditions: is_natural,
        },
        "memberships.memberships_type": {
          type: "select-radio",
          label: "t:memberships_form_mtype",
          required: true,
          width: "full",
          order: 610,
          choices: [
            {
              value: "active",
              label: "Active",
              conditions: is_natural,
            },
            {
              value: "investing",
              label: "Investing",
            },
          ],
        },
        shares_options: {
          type: "select-radio",
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
        "memberships.memberships_shares": {
          type: "number",
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
        description_shares_normal: {
          type: "description",
          order: 630,
          label: "Chosen shares",
          description: "t:mila_form_shares_normal",
          conditions: shares_normal,
        },
        description_shares_social: {
          type: "description",
          order: 630,
          label: "Chosen shares",
          description: "t:mila_form_shares_social",
          conditions: shares_social,
        },
        description_shares_more: {
          type: "description",
          order: 630,
          label: "Chosen shares",
          description: "t:mila_form_shares_more",
          conditions: shares_more,
        },
        // TODO: CALC TOTAL VALUE
        section_payment: {
          type: "section",
          order: 700,
          title: "Payment details",
          description: "t:mila_form_payment",
        },
        "directus_users.payments_type": {
          label: "Payment type",
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
        "directus_users.payments_account_iban": {
          label: "Bank account IBAN",
          type: "text",
          order: 720,
          conditions: is_sepa,
          required: true,
        },
        "directus_users.payments_account_owner": {
          label: "Bank account owner",
          type: "text",
          order: 730,
          conditions: is_sepa,
          required: true,
        },
        section_survey: {
          type: "section",
          order: 800,
          title: "Survey",
          description: "t:mila_form_survey",
        },
        "directus_users.mila_survey_contact": {
          label: "How did you hear about us?",
          type: "textarea",
          order: 810,
        },
        "directus_users.mila_survey_motive": {
          label: "What convinced you to join MILA?",
          type: "textarea",
          order: 820,
        },
        // TODO: Select multiple
        "directus_users.mila_groups_interested": {
          label: "Would you be interested to join a working group?",
          description:
            "You can find more information about the working groups here: https://www.mila.wien/de/mitmachen/arbeitsgruppen/",
          type: "select",
          order: 830,
          required: true,
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
        "directus_users.mila_skills": {
          label: "What are your occupations/skills/interests?",
          type: "select",
          order: 840,
          required: true,
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
        section_final: {
          type: "section",
          title: "Terms",
          order: 900,
        },
        terms2: {
          type: "toggle",
          label: "Statutes",
          description: "t:mila_form_check2",
          order: 920,
          width: "full",
          required: true,
        },
        terms3: {
          type: "toggle",
          label: "Data use",
          description: "t:mila_form_check3",
          order: 930,
          width: "full",
          required: true,
        },
        "directus_users.mila_pr_approved": {
          type: "toggle",
          label: "PR Work",
          description: "t:mila_form_check1",
          order: 931,
          width: "full",
        },
        final1: {
          type: "description",
          order: 940,
          label: "Liability",
          description: "t:mila_form_final1",
        },
        final2: {
          type: "description",
          order: 950,
          label: "Payout upon termination",
          description: "t:mila_form_final2",
        },
        final3: {
          type: "description",
          order: 960,
          label: "Revocation",
          description: "t:mila_form_final3",
        },
      },
    };
  },
});
