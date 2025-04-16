CREATE TABLE "user_management"(
    "user_id" UUID NOT NULL,
    "user_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "role" VARCHAR(255) CHECK
        ("role" IN('')) NOT NULL,
        "first_name" VARCHAR(255) NOT NULL,
        "last_name" VARCHAR(255) NOT NULL,
        "is_active" BOOLEAN NOT NULL,
        "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
        "last_login" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "user_management" ADD PRIMARY KEY("user_id");
CREATE TABLE "supplier_managment"(
    "supplier_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "contact_person" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "address" TEXT NOT NULL,
    "tax_id" VARCHAR(255) NOT NULL,
    "payment_terms" VARCHAR(255) NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "supplier_managment" ADD PRIMARY KEY("supplier_id");
CREATE TABLE "po_managment"(
    "po_id" UUID NOT NULL,
    "po_number" VARCHAR(255) NOT NULL,
    "supplier_id" UUID NOT NULL,
    "status" VARCHAR(255) CHECK
        ("status" IN('')) NOT NULL,
        "total_amount" DECIMAL(8, 2) NOT NULL,
        "expected_delivery_date" DATE NOT NULL,
        "notes" TEXT NOT NULL,
        "po_date" DATE NOT NULL,
        "updated_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
        "bid_number" VARCHAR(255) NOT NULL,
        "contract_no" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "po_managment" ADD PRIMARY KEY("po_id");
CREATE TABLE "po_line_items"(
    "item_id" UUID NOT NULL,
    "po_id" VARCHAR(255) NOT NULL,
    "item_code" VARCHAR(255) NOT NULL,
    "discription" VARCHAR(255) NOT NULL,
    "quantity" BIGINT NOT NULL,
    "unit_price" DOUBLE PRECISION NOT NULL,
    "total_price" DOUBLE PRECISION NOT NULL
);
ALTER TABLE
    "po_line_items" ADD PRIMARY KEY("item_id");
CREATE TABLE "approval_workflow"(
    "approval_id" UUID NOT NULL,
    "po_id" UUID NOT NULL,
    "approver_id" UUID NOT NULL,
    "status" VARCHAR(255) CHECK
        ("status" IN('')) NOT NULL,
        "comment" TEXT NOT NULL,
        "action_date" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
        "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "approval_workflow" ADD PRIMARY KEY("approval_id");
CREATE TABLE "file_attachment"(
    "doc_id" UUID NOT NULL,
    "po_id" UUID NOT NULL,
    "file_name" VARCHAR(255) NOT NULL,
    "file_path" VARCHAR(255) NOT NULL,
    "file_type" VARCHAR(255) NOT NULL,
    "uploded_by" UUID NOT NULL,
    "uploded_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "file_attachment" ADD PRIMARY KEY("doc_id");
CREATE TABLE "alert_and_massage"(
    "notefication_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "message" TEXT NOT NULL,
    "is_read" BOOLEAN NOT NULL,
    "related_entity" VARCHAR(255) CHECK
        ("related_entity" IN('')) NOT NULL,
        "related_id" VARCHAR(255) NOT NULL,
        "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "alert_and_massage" ADD PRIMARY KEY("notefication_id");
CREATE TABLE "generated_reports"(
    "report_id" BIGINT NOT NULL,
    "type" VARCHAR(255) CHECK
        ("type" IN('')) NOT NULL,
        "generated_by" UUID NOT NULL,
        "filters" JSON NOT NULL,
        "file_path" VARCHAR(255) NOT NULL,
        "generated_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "generated_reports" ADD PRIMARY KEY("report_id");
CREATE TABLE "customer_managment"(
    "customer_id" UUID NOT NULL,
    "org_type" VARCHAR(255) NOT NULL,
    "org_ministry" VARCHAR(255) NOT NULL,
    "org_department" VARCHAR(255) NOT NULL,
    "org_name" VARCHAR(255) NOT NULL,
    "org_office_zone" VARCHAR(255) NOT NULL,
    "buyer_designation" VARCHAR(255) NOT NULL,
    "buyer_contact_number" BIGINT NOT NULL,
    "buyer_email" VARCHAR(255) NOT NULL,
    "buyer_gstin" VARCHAR(255) NOT NULL,
    "buyer_address" TEXT NOT NULL,
    "ifd_concurrence" VARCHAR(255) NOT NULL,
    "desig_admn_approval" VARCHAR(255) NOT NULL,
    "desig_fin_approval" VARCHAR(255) NOT NULL,
    "paying_auth_role" VARCHAR(255) NOT NULL,
    "paying_mode" VARCHAR(255) NOT NULL,
    "paying_desig" VARCHAR(255) NOT NULL,
    "paying_email" VARCHAR(255) NOT NULL,
    "paying_address" TEXT NOT NULL
);
ALTER TABLE
    "customer_managment" ADD PRIMARY KEY("customer_id");
CREATE TABLE "tax_bifurcation"("i" BIGINT NOT NULL);
ALTER TABLE
    "tax_bifurcation" ADD PRIMARY KEY("i");
CREATE TABLE "seller_details"(
    "GeM_seller_id" VARCHAR(255) NOT NULL,
    "new_column" BIGINT NOT NULL,
    "company_name" VARCHAR(255) NOT NULL,
    "contact_no" INTEGER NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "address" TEXT NOT NULL,
    "msme_regi_no" VARCHAR(255) NOT NULL,
    "gstin_no" VARCHAR(255) NOT NULL,
    "mse_social_categray" VARCHAR(255) NOT NULL,
    "mse_gender" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "seller_details" ADD PRIMARY KEY("GeM_seller_id");